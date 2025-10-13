import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export const productModel = mongoose.model("Products", productSchema);
