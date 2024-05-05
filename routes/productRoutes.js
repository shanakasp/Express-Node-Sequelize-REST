const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getPublishedProduct,
} = require("../controllers/productController");

// Route to create a new product
router.post("/products", createProduct);

// Route to get all products
router.get("/products", getAllProducts);

// Route to get a product by ID
router.get("/products/:id", getProductById);

// Route to update a product by ID
router.put("/products/:id", updateProductById);

// Route to delete a product by ID
router.delete("/products/:id", deleteProductById);

router.get("/published", getPublishedProduct);

module.exports = router;
