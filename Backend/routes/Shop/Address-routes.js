const express = require("express");
const router = express.Router();
const {
  addAddress,
  fetchAddress,
  updateAddress,
  deleteAddress,
} = require("../../controllers/Shop/Address-controller");

router.post("/addAddress", addAddress);
router.get("/fetchAddress/:userId", fetchAddress);
router.put("/updateAddress/:userId/:addressId", updateAddress);
router.delete("/deleteAddress/:userId/:addressId", deleteAddress);

module.exports = router;
