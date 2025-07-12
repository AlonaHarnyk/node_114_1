import createHttpError from "http-errors";

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../services/products.js";

export const getProductsController = async (req, res) => {
  const products = await getProducts();
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const getProductController = async (req, res) => {
  const product = await getProduct(req.params.productId);
  if (product == null) {
    throw new createHttpError(404, "Product not found");
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${req.params.productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const product = await updateProduct(req.params.productId, req.body);

  if (product == null) {
    throw new createHttpError(404, "Product not found");
  }
  res.status(200).json({
    status: 200,
    message: "Successfully patched a product!",
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const product = await deleteProduct(req.params.productId);
  if (product == null) {
    throw new createHttpError(404, "Product not found");
  }
  res.json({ status: 200, message: "Successfully deleted a product!" });
};
