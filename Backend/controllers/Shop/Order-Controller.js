// const { payment } = require("paypal-rest-sdk");
const Oder = require("../../models/Oder");
const Paypal = require("../../Helpers/Paypal");

const createOder = async (req, res) => {
  try {
    const {
      userId,
      addressId,
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
        return_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
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
          addressId,
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

        const approvalUrl = payment.links.find(
          (link) => link.rel === "approval_url"
        );
        res.redirect(approvalUrl.href);

        await newlyCreatedoder.save();
        res.status(201).json({
          success: true,
          message: "Oder created successfully",
          data: newlyCreatedoder,
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createOder,
  capturePayment,
};