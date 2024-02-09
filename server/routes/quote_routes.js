const express = require("express");
const Quote = require("../models/Quote");
const router = express.Router();

// Route to get a quote for a merchant and product.
// Use the GET with "/api/quote/getQuote?p=productId&m=merchantId".
router.get("/getQuote", async (req, res) => {
  try {
    // Extracting query parameters.
    const productId = req.query.p;
    const merchantId = req.query.m;

    // Validation.
    if (!productId || !merchantId) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    // Find the quote based on merchantId and productId
    const quote = await Quote.findOne({ productId, merchantId });

    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }
    res.status(200).json(quote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new quote for a merchant.
router.post("/create/:merchantId", async (req, res) => {
  try {
    const { merchantId } = req.params;
    const { productId, sellingPrice } = req.body;

    // Validation.
    if (!productId || !sellingPrice || isNaN(sellingPrice)) {
      return res.status(400).json({ error: "Invalid request format." });
    }

    const newQuote = new Quote({
      productId,
      merchantId,
      sellingPrice,
    });
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
