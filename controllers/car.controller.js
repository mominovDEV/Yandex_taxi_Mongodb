const { errorHandler } = require("../helpers/error_handler");
const Car = require("../models/Car");

//addCars
const addCars = async (req, res) => {
  try {
    const {
      car_number,
      make,
      model,
      year,
      mileage,
      // price_type_id,
      
    } = req.body;
    const newCar = await Car({
      car_number,
      make,
      model,
      year,
      mileage,
      // price_type_id,
    });
    // await newCar.validate();
    await newCar.save();
    res.status(200).send({ message: "Car qushildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getCars
const getCars = async (req, res) => {
  try {
    const Cars = await Car.find({});
    if (!Cars) {
      return res.status(400).send({ message: "Car topilmadi" });
    }
    res.json({ Cars });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getCarsById
const getCarsById = async (req, res) => {
  const Cars = await Car.findOne({ _id: req.params.id });
  if (!Cars) {
    return res.status(400).send({ message: "Car topilmadi" });
  }
  console.log(Car);
  res.json({ Car });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

// UpdateCars
const updateCars = async (req, res) => {
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
    const Car = await Car.updateOne(
      { _id: req.params.id },
      { first_name, last_name, age, passport, driver_license, adress, phone }
    );
    if (Car.modifiedCount === 0) {
      res.status(404).json({ message: "Car already updated" });
    } else {
      res.status(201).json({ message: "Car updated successfully" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

// DeleteCars
const deleteCarById = async (req, res) => {
  const Car = await Car.deleteOne({ _id: req.params.id });
  if (!Car) {
    return res.status(400).send({ message: "Car uchirilmadi" });
  }
  res.json({ Car });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addCars,
  getCars,
  getCarsById,
  updateCars,
  deleteCarById,
};
