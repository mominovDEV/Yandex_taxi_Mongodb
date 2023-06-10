const { errorHandler } = require("../helpers/error_handler");
const Car = require("../models/Car");
const Price_type = require("../models/Price_type");
const Rent = require("../models/Rent");
const Client = require("../models/Client");

const addCar = async (req, res) => {
  try {
    const { car_number, make, model, year, mileage, price_type_id } = req.body;
    const data = await Price_type.findOne({ _id: price_type_id });
    if (data == null) return res.status(400).send("The id is invalid! try again");
    const result = await Car({
      car_number,
      make,
      model,
      year,
      mileage,
      price_type_id,
    });
    await result.save();
    res.status(200).send("the car data has been saved successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCars = async (req, res) => {
  try {
    const data = await Car.find({});
    if (!data) return res.status(400).send("Data not found");
    res.status(200).send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCar = async (req, res) => {
  try {
    const id = req.params.id;
    const idData = await Car.findOne({ _id: id });
    if (idData == null) return res.status(400).send("The id is invalid! try again");
    const data = await Car.findById(id);
    res.status(200).send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const { car_number, make, model, year, mileage, price_type_id } = req.body;
    const idData = await Car.findOne({ _id: id });
    if (idData == null) return res.status(400).send("The id is invalid! try again");
    const data = await Car.findByIdAndUpdate(
      { _id: id },
      { car_number, make, model, year, mileage, price_type_id }
    );
    res.status(200).send("the car data has been updated successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};
const deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const idData = await Car.findById(id);
    if (idData < 1) return res.status(400).send("Id boyicha malumot topilmadi");
    await Car.findByIdAndDelete({ _id: id });
    res.status(200).send("the car data has been deleted successfully");
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCarClients = async (req, res) => {
  try {
    const { car_number, from_datetime, to_datetime } = req.body;
    const car = await Car.find({ car_number }); // avtomobil raqamidan oladi
    const ish = car[0].id;
    const rent = await Rent.find({
      car_id: ish,
      from_datetime: { $lte: from_datetime },
      to_datetime: { $gte: to_datetime },
    });
    let answer = [];
    for (let obj of rent) {
      const id = obj.client_id;
      const result = await Client.findOne({ _id: id });
      answer.push(result);
    }

    res.status(200).send(answer);
  } catch (error) {
    errorHandler(res, error);
  }
};
module.exports = {
  addCar,
  getCar,
  getCars,
  updateCar,
  deleteCar,
  getCarClients,
};
