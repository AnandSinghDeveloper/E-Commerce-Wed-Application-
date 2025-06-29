const router = require("express").Router();

const {
  AddFeatureImage,
  GetFeatureImage,
} = require("../../../controllers/Admin/common/Feature-controller");

router.post("/AddFeatureImage", AddFeatureImage);
router.get("/GetFeatureImage", GetFeatureImage);

module.exports = router;
