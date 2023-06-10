const { Router } = require("express");
const {
  getClients,
  getClientsById,
  addClients,
} = require("../controllers/Client.controller");

const router = Router();

router.get("/", getClients);
router.get("/:id", getClientsById);
router.post("/", addClients);

module.exports = router;
