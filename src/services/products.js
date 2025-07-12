import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();

export const getProduct = (productId) => Product.findById(productId);

export const createProduct = (productData) => Product.create(productData);

export const updateProduct = (productId, updateData) =>
  Product.findByIdAndUpdate(productId, updateData, { new: true });

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);
