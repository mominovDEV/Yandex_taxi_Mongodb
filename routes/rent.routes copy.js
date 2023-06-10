const { Router } = require("express");
const {
  getRents,
  getRentsById,
  addRents,
} = require("../controllers/Rent.controller");
const { deleteRentById } = require("../controllers/rent.controller copy");

const router = Router();

router.get("/", getRents);
router.get("/:id", getRentsById);
router.post("/", addRents);
router.delete("/:id", deleteRentById);


module.exports = router;
