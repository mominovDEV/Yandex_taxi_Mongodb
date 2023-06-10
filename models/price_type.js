const { Schema, model } = require("mongoose");

const price_typeSchema = new Schema(
  {
    price_per_dar: { type: String},
    price_per_hour: { type: String},
    late_fee_per_hour: { type: Number },

  },
  {
    versionKey: false,
  }
);


module.exports = model("price_type", price_typeSchema);
