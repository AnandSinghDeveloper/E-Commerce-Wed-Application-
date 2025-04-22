const express = require("express");
const router = express.Router();
const {
  AddToCart,
  fetchCartitems,
  DeleteCartitem,
  UpdateCartitemQuantity,
} = require("../../controllers/Shop/card-controller");

router.post("/addToCart", AddToCart);
router.get('/fetchCartitems/:userId',fetchCartitems);
router.delete('/deleteCartitem/:userId/:productId', DeleteCartitem);
router.put('/updateCartitemQuantity', UpdateCartitemQuantity);

module.exports = router;