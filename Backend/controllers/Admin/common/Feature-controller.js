const Feature = require("../../../models/Feature");

const AddFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    const FeatureImage = await Feature({ image });

    await FeatureImage.save();

    res.status(200).json({
      success: true,
      message: "Image added successfully",
      data: FeatureImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

const GetFeatureImage = async (req, res) => {
  try {
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

module.exports = { AddFeatureImage, GetFeatureImage };
