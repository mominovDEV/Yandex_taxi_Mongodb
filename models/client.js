const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    passport: {
      type: String,
      required: true,
      unique: true,
    },
    driver_license: {
      type: String,
      required: true,
      unique: true,
    },
    adress: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Client", clientSchema);
