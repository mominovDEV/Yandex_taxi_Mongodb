const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    age: { type: Number, min: 18 },
    passport: { type: Number },
    driver_license: { type: Number },
    adress: { type: String },
    phone: { tye: Number },
  },
  {
    versionKey: false,
  }
);

const rentSchema = new Schema(
  {
    car_id: { type: String, required: true, trim: true },
    client_id: { type: String, required: true, trim: true },
    from_datetime: { type: Number, min: 18 },
    to_datetime: { type: Number },
    driver_license: { type: Number },
    adress: { type: String },
    phone: { tye: Number },
  },
  {
    versionKey: false,
  }
);

module.exports = model("client", clientSchema);
module.exports = model("rent", rentSchema);
