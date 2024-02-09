const express = require("express");
const Product = require("../models/Product");
const Merchant = require("../models/Merchant");
const router = express.Router();

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
});

// Creating a new product.
router.post("/create", async (req, res) => {
  try {
    const { productName, imageLink, productDescription } = req.body;
    const newProduct = new Product({
      productName,
      imageLink,
      productDescription,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Appending a list of merchantId to the product.
router.post("/insert/:id", async (req, res) => {
  try {
    const { merchantsArr } = req.body;
    const currProduct = await Product.findById(req.params.id);
    if (!currProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    // Validating each merchantId before inserting.
    for (const merchantId of merchantsArr) {
      // Check if the merchantId exists in the database
      const merchantExists = await Merchant.exists({ _id: merchantId });
      if (!merchantExists) {
        return res
          .status(400)
          .json({ error: `Merchant with ID ${merchantId} not found` });
      }
    }
    // Concatenating merchantsArr to existing merchantIds.
    currProduct.merchantIds = currProduct.merchantIds.concat(merchantsArr);
    const savedProduct = await currProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
