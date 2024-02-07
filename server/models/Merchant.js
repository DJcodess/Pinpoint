import mongoose from "mongoose";
import { uuid } from "uuidv4";

const merchantSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuid(),
    },
    merchantName: { type: String, required: true },
    merchantAddress: { type: String, required: true },
    merchantDescription: { type: String, required: true, default: "NA" },
    serviceablePincodes: { type: [Number], required: false },
  },
  {
    strict: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("Merchant", merchantSchema);
