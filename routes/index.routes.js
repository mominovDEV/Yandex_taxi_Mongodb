const { Router } = require("express");

const clientRouter = require("./client.routes");

const router = Router();

router.use("/api/client", clientRouter);

module.exports = router;
