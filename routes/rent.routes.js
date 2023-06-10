const { Router } = require("express");
const {
  addRent,
  getRents,
  getRent,
  updateRent,
  deleteRent,
} = require("../controllers/rent.controller");

const router = Router();

router.get("/", getRents);
router.post("/", addRent);
router.get("/:id", getRent);
router.put("/:id", updateRent);
router.delete("/:id", deleteRent);

module.exports = router;
