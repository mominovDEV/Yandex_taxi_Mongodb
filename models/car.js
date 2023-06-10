const { Schema, model } = require("mongoose");

const carSchema = new Schema(
  {
    car_number: { type: Number },
    make: { type: String },
    model: { type: Number, min: 18 },
    year: { type: Number },
    mileage: { type: Number },
    price_type_id: { type: String },
  },
  {
    versionKey: false,
  }
);


module.exports = model("car", carSchema);
