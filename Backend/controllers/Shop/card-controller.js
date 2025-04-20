const Cards = require("../../models/cart");
const Products = require("../../models/products");

const AddToCart = async (req, res) => {
  try {
          
     const {userId,productId,quantity} = req.body;
      if(!userId || !productId || !quantity){
        res.status(400).json({
          success:false,
          message:"Please provide all the required fields"
        })
      }

      const product = await Products.findById(productId);

      if(!product){
        res.status(404).json({
          success:false,
          message:"Product not found"
        })
      }

      let cart = await Cards.findOne({userId});
      if(!cart){
        cart = new Cards({userId,items:[]});
      }

      const  currentProductIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if(currentProductIndex === -1){
        cart.items.push({productId,quantity});
      }else{
        
        cart.items[currentProductIndex].quantity += quantity;
      }


      await cart.save();

      res.status(200).json({
        success:true,
        message:"Product added to cart",
        data:cart
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
