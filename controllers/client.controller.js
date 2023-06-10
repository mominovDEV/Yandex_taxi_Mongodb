const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/Client");
const Rent = require("../models/Rent");
// addclient
const addClient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      adress,
      phone,
    } = req.body;
    const check = await Client.findOne({
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      adress,
      phone,
    });
    if (check !== null)
      return res
        .status(400)
        .send({ message: "This information is already added" });
    const data = await Client({
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      adress,
      phone,
    });
    await data.save();
    res.status(200).send("Client is added");
  } catch (error) {
    errorHandler(res, error);
  }
};
// get clients
const getClients = async (req, res) => {
  try {
    const data = await Client.find({});
    if (!data) return res.status(400).send("Information is not found");
    res.status(200).send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};
// getclientByid
const getClient = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Client.findById(id);
    if (!data) return res.status(400).send("Id xato kiritlgan");
    res.status(200).send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};
// updateClients
const updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      adress,
      phone,
    } = req.body;
    const data = await Client.findById(id);
    if (!data) return res.status(400).send("Id xato kiritlgan");
    await Client.findByIdAndUpdate(
      { _id: id },
      {
        first_name,
        last_name,
        birthday,
        passport,
        driver_license,
        adress,
        phone,
      }
    );
    res.status(200).send("ClientInfo is updated");
  } catch (error) {
    errorHandler(res, error);
  }
};
// deleteClients
const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Client.findById(id);
    if (!data) return res.status(400).send("Id xato kiritlgan");
    await Client.findByIdAndDelete(id);
    res.status(200).send("Client is deleted! "); 
  } catch (error) {
    errorHandler(res, error);
  }
};

const informationClient = async (req, res) => {
  try {
    const info = req.body;
    const data = await Client.find(info);
    console.log(data);
    const clientdata = await Rent.find({ client_id: data[0].id });
    let result = 0;
    for (const data of clientdata) {
      result += data.amount;
    }
    result = Math.floor(result);
    res.status(200).send({ message: "rents:" + clientdata.length, result });
  } catch (error) {
    errorHandler(res, error);
  }
};
module.exports = {
  getClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
  informationClient,
};
