const Review = require("../../models/Review");
const Products = require("../../models/products");
const Order = require("../../models/Oder");

const AddProductReview = async (req, res) => {
  try {
    const { productId, reviewMessage, reviewRating, userId, UserName } = req.body;

    const order = await Order.findOne({
      userId: userId,
      "cartitems.productId": productId,
      orderStatus: "confirmed",
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "You have not ordered this product yet",
      });
    }

    const existingReview = await Review.findOne({
      productId: productId,
      userId: userId,
    });

    if (existingReview) {
      return res.status(403).json({
        success: false,
        message: "You have already reviewed this product",
      });
    }

    const newReview = new Review({
      productId: productId,
      reviewMessage: reviewMessage,
      reviewRating: reviewRating,
      userId: userId,
      UserName: UserName,
    });
  
    

    await newReview.save();

    const reviews = await Review.find({ productId: productId });
    const totalReviewsLength = reviews.length;
    const averageRating =
      reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewRating, 0) /
      totalReviewsLength;

    await Products.findByIdAndUpdate(productId, { AverageRating: averageRating });

    res.status(200).json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const GetProductReview = async (req, res) => {
  try {

    const { productId } = req.params;

    const Reviews = await Review.find({productId : productId});

    res.status(200).json({
      success:true,
      message:"Review fetched successfully",
      data:Reviews
    })

  } catch (error) {
    res.stutus(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { AddProductReview, GetProductReview };
