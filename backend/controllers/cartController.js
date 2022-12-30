const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

exports.test = async (req, res) => {
  console.log("Cart is ready");
  return res.json({ message: "Cart Routes working" });
};

exports.addToCart = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findById(productId);
    /// If Product is not available then send error response to frontend
    if (!product || product == null) {
      return res.status(201).json({
        message: "Product not available, Kindly please add available Product",
        status: false,
      });
      await product.save();
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
