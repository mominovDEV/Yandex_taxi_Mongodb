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
      validate: {
        validator: function (value) {
          return /\d{2}-\d{3}-\d{2}-\d{2}/.test(value);
        },
        message: (props) => `${props.value}-raqam notug'ri Namuna:(99-777-77-77)`,
      },
      maxLength: 12,
      index: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Client", clientSchema);
