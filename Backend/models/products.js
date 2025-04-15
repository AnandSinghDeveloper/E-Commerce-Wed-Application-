const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    sellingPrice: {
      type: Number,
    },
    totalStock: {
      type: Number,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
