import { productModel } from "../models/productModel.js";

const addProducts = async (req, res) => {
  try {
    const product = new productModel(req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Error while saving the product" });
    }
    const savedProduct = await product.save();
    return res.status(201).json({
      success: true,
      message: "Successfully added the products",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error while saving product:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error while adding the product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    if (!products) {
      return res
        .status(401)
        .json({ message: "Error while getting all the products" });
    }
    return res.status(201).json({
      success: true,
      message: "Successfully fetched all the products",
      products: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while fetching all the products..",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const requestedProduct = await productModel.findById(req.params.id);
    if (!requestedProduct) {
      return res
        .status(404)
        .json({ message: "Error occured while getting the product" });
    }
    return res.status(200).json({
      message: "Successfully fetched the product ",
      product: requestedProduct,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while getting the products..",
      error: error.message,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product does not exists..." });
    }
    return res.status(200).json({
      success: true,
      message: "Deleted the product successfully...",
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting the products..",
      error: error.message,
    });
  }
};

export { addProducts, getAllProducts, getProductById, deleteProductById };
