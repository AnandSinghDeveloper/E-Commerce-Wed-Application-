const express = require("express");
const router = express.Router();
const {  HandleImageUpload , Addnewproduct, FatchProducts, Updateproduct, Deleteproduct} = require("../../controllers/Admin/products-controller");
const { upload } = require("../../Helpers/Cloudnery");




router.post("/uploadimage", upload.single("my-image"), HandleImageUpload);
router.post("/addproduct", Addnewproduct);
router.get("/fetchproducts", FatchProducts);
router.put("/updateproduct/:id", Updateproduct);
router.delete("/deleteproduct/:id", Deleteproduct)


module.exports = router;
