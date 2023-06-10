const { errorHandler } = require("../helpers/error_handler");
const Rent = require("../models/rent");

//addRents
const addRents = async (req, res) => {
  try {
    const {
      car_id,
      client_id,  
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      amount,
    } = req.body;
    const newRent = await Rent({
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      amount,
    });
    // await newRent.validate();
    await newRent.save();
    res.status(200).send({ message: "Rent qushildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getRents
const getRents = async (req, res) => {
  try {
    const Rents = await Rent.find({});
    if (!Rents) {
      return res.status(400).send({ message: "Rent topilmadi" });
    }
    res.json({ Rents });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getRentsById
const getRentsById = async (req, res) => {
  const Rents = await Rent.findOne({ _id: req.params.id });
  if (!Rents) {
    return res.status(400).send({ message: "Rent topilmadi" });
  }
  console.log(Rent);
  res.json({ Rent });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

// UpdateRents
const updateRents = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      age,
      passport,
      driver_license,
      adress,
      phone,
    } = req.body;
    const Rent = await Rent.updateOne(
      { _id: req.params.id },
      { first_name, last_name, age, passport, driver_license, adress, phone }
    );
    if (Rent.modifiedCount === 0) {
      res.status(404).json({ message: "Rent already updated" });
    } else {
      res.status(201).json({ message: "Rent updated successfully" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

// DeleteRents
const deleteRentById = async (req, res) => {
  const Rent = await Rent.deleteOne({ _id: req.params.id });
  if (!Rent) {
    return res.status(400).send({ message: "Rent uchirilmadi" });
  }
  res.json({ Rent });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addRents,
  getRents,
  getRentsById,
  updateRents,
  deleteRentById,
};
