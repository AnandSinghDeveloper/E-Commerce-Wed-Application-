const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    city: String,
    state: String,
    Pincode: String,
    country: String,
    phone: String,
    email: String,
    userId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
