const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/client");

//addClients
const addClients = async (req, res) => {
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
    const newClient = await Client({
      first_name,
      last_name,
      age,
      passport,
      driver_license,
      adress,
      phone,
    });
    // await newClient.validate();
    await newClient.save();
    res.status(200).send({ message: "Client qushildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getClients
const getClients = async (req, res) => {
  try {
    const Clients = await Client.find({});
    if (!Clients) {
      return res.status(400).send({ message: "Client topilmadi" });
    }
    res.json({ Clients });
  } catch (error) {
    errorHandler(res, error);
  }
};

//getClientsById
const getClientsById = async (req, res) => {
  const Clients = await Client.findOne({ _id: req.params.id });
  if (!Clients) {
    return res.status(400).send({ message: "Client topilmadi" });
  }
  console.log(Client);
  res.json({ Client });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

// UpdateClients
const updateClients = async (req, res) => {
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
    const Client = await Client.updateOne(
      { _id: req.params.id },
      { first_name, last_name, age, passport, driver_license, adress, phone }
    );
    if (Client.modifiedCount === 0) {
      res.status(404).json({ message: "Client already updated" });
    } else {
      res.status(201).json({ message: "Client updated successfully" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

// DeleteClients
const deleteClientById = async (req, res) => {
  const Client = await Client.deleteOne({ _id: req.params.id });
  if (!Client) {
    return res.status(400).send({ message: "Client uchirilmadi" });
  }
  res.json({ Client });
  try {
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addClients,
  getClients,
  getClientsById,
  updateClients,
  deleteClientById,
};
