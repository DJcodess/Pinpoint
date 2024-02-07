const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    merchantId: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
  },
  {
    collection: 'Quote',
    strict: true,
    timestamps: true,
  }
);

// Compound index on unique (productId-merchantId).
quoteSchema.index({ productId: 1, merchantId: 1 }, { unique: true });

module.exports = mongoose.model("Quote", quoteSchema);
