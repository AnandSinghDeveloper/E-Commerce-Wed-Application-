const express = require("express");
const router = express.Router();


const {
  SearchProducts
} = require("../../controllers/Shop/search-controller");

router.get("/:keyword", SearchProducts);


module.exports = router;
