const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
    userId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
