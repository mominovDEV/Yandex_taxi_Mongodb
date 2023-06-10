const { Schema, model } = require("mongoose");

const rentSchema = new Schema(
  {
    car_id: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    from_datetime: {
      type: Date,
      required: true,
    },
    to_datetime: {
      type: Date,
      required: true,
    },
    rent_status_id: {
      type: Number,
      required: true,
      min: [1, "Minimum bir bo'lishi kerak"],
      max: [2, "Maximum ikki kiritilsin"],
    },
    rent_type_id: {
      type: Number,
      required: true,
      min: [1, "Minimum bir bo'lishi kerak"],
      max: [2, "Maximum ikki kiritilsin"],
    },
    amount: {
      type: Number,
    },
  },
  { versionKey: false }
);

module.exports = model("Rent", rentSchema);
