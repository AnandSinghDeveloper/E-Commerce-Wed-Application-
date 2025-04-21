const Cards = require("../../models/cart");
const Products = require("../../models/products");

const AddToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const product = await Products.findById(productId);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let cart = await Cards.findOne({ userId });
    if (!cart) {
      cart = new Cards({ userId, items: [] });
    }

    const currentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (currentProductIndex === -1) {
      cart.items.push({ productId, quantity });
    } else {
      cart.items[currentProductIndex].quantity += quantity;
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      data: cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,

      message: "Internal Server Error",
    });
  }
};

const fetchCartitems = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({
        success: false,
        message: "Please provide userId",
      });
    }

    const cart = await Cards.findOne({ userId }).populate({
      path: "items.productId",
      select: "image title price sellingPrice",
    });

    if (!cart) {
      res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const vaildCartItems = cart.items.filter((item) => item.productId);

    if (vaildCartItems.length < cart.items.length) {
      cart.items = vaildCartItems;
      await cart.save();
    }

    const populatedCartItems = vaildCartItems.map((item) => ({
      productId: item.productId._id,
      image: item.productId.image,
      title: item.productId.title,
      price: item.productId.price,
      sellingPrice: item.productId.sellingPrice,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: {
        ...cart._doc,
        items: populatedCartItems,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const DeleteCartitem = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    if (!userId || !productId) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const cart = await Cards.findOne({ userId }).populate({
      path: "items.productId",
      select: "image title price sellingPrice",
    });

    if (!cart) {
      res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.productId._id.toString() === productId
    );
    await cart.save();

    await cart.populate({
      path: "items.productId",
      select: "image title price selllingPrice",
    });

    const populatedCartItems = cart.items.map((item) => ({
      productId: item.productId ? item.productId._id : null,
      image: item.productId ? item.productId.image : null,
      title: item.productId ? item.productId.title : null,
      price: item.productId ? item.productId.price : null,
      sellingPrice: item.productId ? item.productId.sellingPrice : null,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: {
        ...cart._doc,
        items: populatedCartItems,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,

      message: "Internal Server Error",
    });
  }
};

const UpdateCartitemQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const cart = await Cards.findOne({ userId });

    if (!cart) {
      res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const findCurrentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (findCurrentProductIndex === -1) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    cart.items[findCurrentProductIndex].quantity = quantity;
    await cart.save();

    await cart.populate({
      path: "items.productId",
      select: "image title price sellingPrice",
    });

    const populatedCartItems = cart.items.map((item) => ({
      productId: item.productId ? item.productId._id : null,
      image: item.productId ? item.productId.image : null,
      title: item.productId ? item.productId.title : null,
      price: item.productId ? item.productId.price : null,
      sellingPrice: item.productId ? item.productId.sellingPrice : null,
      quantity: item.quantity,
    }));

    res.status(200).json({
      success: true,
      message: "Product quantity updated successfully",
      data: {
        ...cart._doc,
        items: populatedCartItems,
      },
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
  AddToCart,
  fetchCartitems,
  DeleteCartitem,
  UpdateCartitemQuantity,
};
