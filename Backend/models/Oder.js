const mongoose = require("mongoose");
const Address = require("./Address");

const OderSchema = new mongoose.Schema({
  userId: String,
  cartId:String,
  cartitems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  AddressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,
  paymentStatus: String,
  paymentMethod: String,
  paymentId: String,
  payerID: String,
  orderDate: String,
  oderUpdatedDate: String,
  totalAmount: String,
});

module.exports = mongoose.model("Oder", OderSchema);
