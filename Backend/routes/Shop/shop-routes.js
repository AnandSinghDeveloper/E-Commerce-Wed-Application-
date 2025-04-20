const express = require("express");
const router = express.Router();


const {
  getfilterProducts,
  getProductsDetails
} = require("../../controllers/Shop/product-controller");

router.get("/getfilterProducts", getfilterProducts);
router.get("/getProductsDetails/:id", getProductsDetails);

module.exports = router;
