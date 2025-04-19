const express = require("express");
const router = express.Router();
const {
  getfilterProducts,
} = require("../../controllers/Shop/product-controller");

router.get("/getfilterProducts", getfilterProducts);

module.exports = router;
