const { Schema, model } = require("mongoose");


const rentSchema = new Schema(
  {
    car_id: { type: Number }, // carni idsi
    client_id: { type: Number }, // client_id si
    from_datetime: { type: Number, min: 18 }, // soat va minut hisobga olinadi
    to_datetime: { type: Number },
    rent_status_id: { type: Number, min: 1, max: 2 }, // 1 started 2 finished
    rent_type_id: { type: String, min: 1, max: 2 }, // 1 per day 2 per hour
    amount: { tye: Number }, // hisoblab chiqarib berishi kerak
  },
  {
    versionKey: false,
  }
);

module.exports = model("rent", rentSchema);
