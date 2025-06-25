const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  UserName: String,
  reviewMessage: String,
  reviewRating: Number,
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
