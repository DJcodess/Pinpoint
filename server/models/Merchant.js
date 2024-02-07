const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const merchantSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuidv4(),
    },
    merchantName: { type: String, required: true },
    merchantAddress: { type: String, required: true },
    merchantDescription: { type: String, required: true, default: "NA" },
    serviceablePincodes: { type: [Number], required: false },
  },
  {
    collection: 'Merchant',
    strict: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("Merchant", merchantSchema);
