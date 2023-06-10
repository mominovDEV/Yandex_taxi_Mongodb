const { Router } = require("express");
const {
  getClients,
  addClient,
  getClient,
  updateClient,
  deleteClient,
  informationClient,
} = require("../controllers/client.controller");

const router = Router();

router.get("/", getClients);
router.post("/", addClient);
router.get("/:id", getClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.post("/inform", informationClient);

module.exports = router;
