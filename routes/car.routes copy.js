const { Router } = require("express");
const {
  getClients,
  getClientsById,
  addClients,
  deleteClientById,
} = require("../controllers/Client.controller");

const router = Router();

router.get("/", getClients);
router.get("/:id", getClientsById);
router.post("/", addClients);
router.delete("/:id", deleteClientById);

module.exports = router;
