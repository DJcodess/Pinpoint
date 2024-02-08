const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Creating a new product.
router.post("/create", async (req, res) => {
  try {
    const { productName, imageLink, productDescription } = req.body;
    const newProduct = new Product({
      productName,
      imageLink,
      productDescription,
    });
    constsavedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Getting a list of all products.
router.get("/items", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Getting specific product by its ID.
router.get("/items/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});0

module.exports = router;
