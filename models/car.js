const { Schema, model } = require("mongoose");

const carSchema = new Schema(
  {
    car_number: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    price_type_id: {
      type: Schema.Types.ObjectId,
      ref: "Price_type",
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Car", carSchema);
