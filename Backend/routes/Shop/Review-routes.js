const express = require("express");
const router = express.Router();
const {
  AddProductReview,
  GetProductReview,
} = require("../../controllers/Shop/Review-controller");

router.post("/add", AddProductReview);
router.get("/:productId", GetProductReview);

module.exports = router;
