const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    image: String,
  },
  {
    timestamps: true,
  }
);

const Feature = mongoose.model("Feature", FeatureSchema);
module.exports = Feature;
