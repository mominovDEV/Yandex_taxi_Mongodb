const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/Client");
const Car = require("../models/Car");
const Price_type = require("../models/Price_type");
const Rent = require("../models/Rent");
// const Client = require("../models/Client")

const errorHandler = (res, error) => {
  res.status(500).send({ message: `Xatolik : ${error}` });
};

const addRent = async (req, res) => {
  try {
    const {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
    } = req.body;
    const check1 = await Client.findById(client_id);
    const check2 = await Car.findById(car_id);
    if (!check1) return res.status(400).send("Client_id xato berilgan");
    if (!check2) return res.status(400).send("Car_id xato berilgan");
    const data = await Car.findById(car_id).populate({
      path: "price_type_id",
    });
    const result = data.price_type_id;
    let amount;
    if (rent_type_id == 2) {
      const total =
        new Date(to_datetime).getTime() - new Date(from_datetime).getTime();
      const hours = Math.floor(total / 1000) / 3600;
      amount = hours * result.price_per_hour;
    }
    if (rent_type_id == 1) {
      const total =
        new Date(to_datetime).getTime() - new Date(from_datetime).getTime();
      const day = Math.floor(total / 1000) / 86400;
      amount = day * result.price_per_hour;
    }
    const info = await Rent({
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      amount,
    });
    await info.save();
    res.status(200).send("Ok. Rent is added");
  } catch (error) {
    errorHandler(res, error);
  }
};

const getRents = async (req, res) => {
  try {
    const data = await Rent.find({});
    if (!data) res.status(400).send("Information is not found");
    res.status(200).send(data);
  } catch (error) {}
};

const getRent = async (req, res) => {
  try {
    const id = req.params.id;
    const idData = await Rent.findById(id);
    // if(idData ) return res.status(400).send("id is Incorrect")
    res.status(200).send(idData);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateRent = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
    } = req.body;
    let check = await Rent.findById(id);
    if (check.length < 1) return res.send("id is incorrect");
    let amount1;
    const data = await Car.findById(car_id).populate({
      path: "price_type_id",
    });
    const result = data.price_type_id;
    if (rent_type_id == 2) {
      const total =
        new Date(to_datetime).getTime() - new Date(from_datetime).getTime();
      const hours = Math.floor(total / 1000) / 3600;
      amount1 = hours * result.price_per_hour;
    }
    if (rent_type_id == 1) {
      const total =
        new Date(to_datetime).getTime() - new Date(from_datetime).getTime();
      const day = Math.floor(total / 1000) / 86400;
      amount1 = day * result.price_per_hour;
    }
    await Rent.findByIdAndUpdate(
      { _id: id },
      {
        car_id,
        client_id,
        from_datetime,
        to_datetime,
        rent_status_id,
        rent_type_id,
        amount1,
      }
    );
    res.status(200).send("OK. rentInfo is updated");
  } catch (error) {
    errorHandler(res, error);
  }
};
const deleteRent = async (req, res) => {
  try {
    const id = req.params.id;
    let check = await Rent.findById(id);
    if (!check) return res.send("id is incorrect");
    await Rent.findByIdAndDelete(id);
    res.send("OK. rentinfo is deleted");
  } catch (error) {
    errorHandler(res, error);
  }
};
module.exports = {
  addRent,
  getRents,
  getRent,
  updateRent,
  deleteRent,
};