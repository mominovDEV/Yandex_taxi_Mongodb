const { Router } = require("express");

const clientRouter = require("./client.routes");
const carRouter = require("./car.routes");
const price_type = require("./price_type.routes");
const rentRouter = require("./rent.routes");
const router = Router();

router.use("/api/client", clientRouter); // postmandan surov yuborganimda client bilan beraman boshqalari ham shunday
router.use("/api/price_type", price_type);
router.use("/api/car", carRouter);
router.use("/api/rent", rentRouter);
module.exports = router;
