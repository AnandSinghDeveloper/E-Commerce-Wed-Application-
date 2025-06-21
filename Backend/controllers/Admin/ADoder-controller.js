const Oder = require("../../models/Oder");

const getoderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const oder = await Oder.findById(id);
    if (!oder) {
      return res.status(404).json({
        success: false,
        message: "Oder not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Oder fetched successfully",
      data: oder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllOder = async (req, res) => {
  try {
    const oders = await Oder.find({});
    if (!oders) {
      return res.status(404).json({
        success: false,
        message: "Oder not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Oder fetched successfully",
      data: oders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


module.exports = { getoderDetails, getAllOder };