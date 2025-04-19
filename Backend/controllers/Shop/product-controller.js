const Product = require("../../models/products");


const getfilterProducts = async (req, res) => {
  try {
    const {
      category = [],
      brand = [],
      sortby = "Price : Low to High ",
    } = req.query;

    let filter = {};

    if (category.length) {
      filter.category = { $in: category.split(",") };
    }

    if (brand.length) {
      filter.brand = { $in: brand.split(",") };
    }

    let sort = {};

    switch (sortby) {
      case "Price : Low to High":
        sort.price = 1;

        break;

      case "Price : High to Low":
        sort.price = -1;
        break;
      case "Title : A to Z":
        sort.title = 1;
        break;

      case "Title : Z to A":
        sort.title = -1;

        break;

      default:
        sort.price = 1;
        break;
    }

    const products = await Product.find(filter).sort(sort);
    res.status(200).json({
      message: "Product fetched successfully",
      data: products,
    });

    // console.log(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getfilterProducts };
