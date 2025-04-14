const express = require("express");
const router = express.Router();
const {  HandleImageUpload} = require("../../controllers/Admin/products-controller");
const { upload } = require("../../Helpers/Cloudnery");




router.post("/uploadimage", upload.single("my-image"), HandleImageUpload);

module.exports = router;
