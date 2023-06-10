const { Schema, model } = require("mongoose");


const rentSchema = new Schema(
  {
    car_id: { type: Number},// carni idsi
    client_id: { type: Number},// client_id si
    from_datetime: { type: Number, min: 18 },
    to_datetime: { type: Number },
    rent_status_id: { type: Number },
    rent_type_id: { type: String },
    amount: { tye: Number },
  },
  {
    versionKey: false,
  }
);

module.exports = model("rent", rentSchema);
