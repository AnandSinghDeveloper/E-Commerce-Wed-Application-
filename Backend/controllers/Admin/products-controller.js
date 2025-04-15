const { uploadImage } = require("../../Helpers/Cloudnery");
const Products = require("../../models/products");

const HandleImageUpload = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const b64 = file.buffer.toString("base64");
    const url = `data:${file.mimetype};base64,${b64}`;

    const result = await uploadImage(url);
    console.log(result);

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

const Addnewproduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      sellingPrice,
      totalStock,
      category,
      brand,
      image,
    } = req.body;
    const product = new Products({
      title,
      description,
      price,
      sellingPrice,
      totalStock,
      category,
      brand,
      image,
    });

    await product.save();
    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

const FatchProducts = async (req, res) => {
  try {
    const FatchedProducts = await Products.find();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: FatchedProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

const Updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      price,
      sellingPrice,
      totalStock,
      category,
      brand,
      image,
    } = req.body;

    const updatedProduct = await Products.findById(id);
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "No product found with that id",
      });
    }

    updatedProduct.title = title || updatedProduct.title;
    updatedProduct.description = description || updatedProduct.description;
    updatedProduct.price = price || updatedProduct.price;
    updatedProduct.sellingPrice = sellingPrice || updatedProduct.sellingPrice;
    updatedProduct.totalStock = totalStock || updatedProduct.totalStock;
    updatedProduct.category = category || updatedProduct.category;
    updatedProduct.brand = brand || updatedProduct.brand;
    updatedProduct.image = image || updatedProduct.image;

    await updatedProduct.save();
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

const Deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "No product found with that id",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

module.exports = {
  HandleImageUpload,
  Addnewproduct,
  FatchProducts,
  Updateproduct,
  Deleteproduct,
};
