const express = require("express");
const Merchant = require("../models/Merchant");
const router = express.Router();

// Getting a list of all merchants.
router.get("/merchants", async (req, res) => {
  try {
    const products = await Merchant.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Getting specific merchant by its ID.
router.get("/merchants/:id", async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id);
    if (!merchant) {
      return res.status(404).json({ error: "merchant not found" });
    }
    res.json(merchant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Creating a new merchant.
router.post("/create", async (req, res) => {
  try {
    const { merchantName, merchantAddress, merchantDescription } = req.body;
    const newMerchant = new Merchant({
      merchantName,
      merchantAddress,
      merchantDescription,
    });
    const savedMerchant = await newMerchant.save();
    res.status(201).json(savedMerchant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
