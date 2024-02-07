import mongoose from "mongoose";
import { uuid } from "uuidv4";

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuid(),
    },
    merchantIds: { type: [String], required: true, default: [] },
    productName: { type: String, required: true },
    imageLink: { type: String, required: true },
    productDescription: { type: String },
  },
  {
    strict: true,
    timestamps: true,
  }
);

// Removed 'productCode' in favour of _id as the only primary index.
// productSchema.index({ productCode: 1 }, { unique: false });

module.exports = mongoose.model("Product", productSchema);
