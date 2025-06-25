const Review = require("../../models/Review");
const Products = require("../../models/products");
const Order = require("../../models/Oder");

const AddProductReview = async (req, res) => {
  try {
    const { productId, reviewMessage, reviewRating, userId, UserName } =
      req.body;

    const Order = await Order.findOne({
      userId: userId,
      "cartitems.productId": productId,
      orderStatus: "confirmed",
    });
    if (!Order) {
      return res.status(403).json({
        success: false,
        message: "You have not ordered this product yet",
      });
    }

    const CheackExitingReview = await Review.findOne({
      productId: productId,
      userId: userId,
    });

    if (CheackExitingReview) {
      return res.status(403).json({
        success: false,
        message: "You have already reviewed this product",
      });
    }

    const NewReview = new Review({
      productId: productId,
      reviewMessage: reviewMessage,
      reviewRating: reviewRating,
      userId: userId,
      UserName: UserName,
    });

    await NewReview.save();

    const Reviews = await Review.find({ productId: productId });
    const totalReviewsLength = Reviews.length;
    const AverageRating =
      Reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
      totalReviewsLength;

    await Products.findByIdAndUpdate(productId, { AverageRating });

    res.status(200).json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    res.stutus(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const GetProductReview = async (req, res) => {
  try {
  } catch (error) {
    res.stutus(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { AddProductReview, GetProductReview };
