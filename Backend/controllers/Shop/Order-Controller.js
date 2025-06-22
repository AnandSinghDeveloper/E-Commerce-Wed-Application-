// const { payment } = require("paypal-rest-sdk");
const Oder = require("../../models/Oder");
const Paypal = require("../../Helpers/Paypal");
const Cards = require("../../models/cart");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartId,
      paymentMethod,
      paymentStatus,
      paymentId,
      payerID,
      orderStatus,
      orderDate,
      oderUpdatedDate,
      cartitems,
      AddressInfo,
      totalAmount,
    } = req.body;

    const create_payment_json = {
      intent: "sale",

      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5173/shop/Paypal-return",
        cancel_url: "http://localhost:5173/shop/Paypal-cancal",
      },
      transactions: [
        {
          item_list: {
            items: cartitems.map((item) => ({
              name: item.title,
              sku: item.productId,
              price: item.price.toFixed(2),
              currency: "USD",
              quantity: item.quantity,
            })),
          },

          amount: {
            total: totalAmount.toFixed(2),
            currency: "USD",
          },
          description: "The payment transaction description.",
        },
      ],
    };
    Paypal.payment.create(create_payment_json, async function (error, payment) {
      if (error) {
        console.log(error);

        return res.status(500).json({
          success: false,
          message: " Createing payment failed",
        });
      } else {
        const newlyCreatedoder = new Oder({
          userId,
          cartId,
          paymentMethod,
          paymentStatus,
          paymentId,
          payerID,
          orderStatus,
          orderDate,
          oderUpdatedDate,
          cartitems,
          AddressInfo,
          totalAmount,
        });

        await newlyCreatedoder.save();

        const approvalUrl = payment.links.find(
          (link) => link.rel === "approval_url"
        ).href;

        res.status(201).json({
          success: true,
          message: "Oder created successfully",
          approvalUrl: approvalUrl,
          orderId: newlyCreatedoder._id,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { payerID, paymentId, orderId } = req.body;

    if (!payerID || !paymentId || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    let order = await Oder.findById(orderId);
    console.log(order);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.paymentId = paymentId;
    order.payerID = payerID;
    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";

    const getcartID = order.cartId;
    await Cards.findByIdAndDelete(getcartID);

    await order.save();

    res.status(200).json({
      success: true,
      message: "Payment captured successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getoderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const oder = await Oder.findById(id);
    if (!oder) {
      return res.status(404).json({
        success: false,
        message: "Oder not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Oder fetched successfully",
      data: oder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllOderByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const oders = await Oder.find({ userId });
    if (!oders) {
      return res.status(404).json({
        success: false,
        message: "Oder not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Oder fetched successfully",
      data: oders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getoderDetails,
  getAllOderByUser,
};
