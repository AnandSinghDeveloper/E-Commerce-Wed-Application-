const Products = require("../../models/products");


const SearchProducts = async (req, res) => {
  try {
    const { keyword } = req.params;

    if (!keyword || typeof keyword !=="string") {
      return res.status(400).json({
        success: false,
        message: "Please provide keyword",
      });
    }

    const regex = new RegExp(keyword, "i");

    const searchResult = await Products.find({
      $or: [
        { title: regex },
        { description: regex },
        { category: regex },
        { brand: regex },
      ],
    });
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: searchResult,
    });
  }
  
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
}

module.exports = { SearchProducts };