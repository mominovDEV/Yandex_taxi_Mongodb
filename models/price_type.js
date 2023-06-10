const { Schema, model } = require("mongoose");

const priceSchema = new Schema(
  {
    price_per_day: {
      type: Number,
      required: true,
    },
    price_per_hour: {
      type: Number,
      required: true,
    },
    late_fee_per_hour: {
      type: Number,
    },
  },
  { versionKey: false }
);

module.exports = model("Price_type", priceSchema);
