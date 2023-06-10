const { Router } = require("express");
const {
  getCars,
  addCar,
  getCar,
  updateCar,
  deleteCar,
  getCarClients,
} = require("../controllers/car.controller");

const router = Router();

router.get("/", getCars);
router.post("/", addCar);
router.get("/:id", getCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);
router.post("/info", getCarClients);

module.exports = router;
