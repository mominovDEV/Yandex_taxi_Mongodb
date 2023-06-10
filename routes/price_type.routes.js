const { Router } = require("express");
const {
  addPrice_type,
  getPrice,
} = require("../controllers/price_type.controller");

const router = Router();

router.post("/", addPrice_type);
router.get("/", getPrice);

module.exports = router;
