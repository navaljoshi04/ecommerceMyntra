import express from "express";
import {
  addProducts,
  deleteProductById,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();
router.post("/create", addProducts);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);

export default router;
