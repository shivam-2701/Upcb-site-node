const router = require("express").Router();
const enRouter = require("./enRouter");
const hiRouter = require("./hiRouter");

router.use("/", enRouter);
router.use("/hi", hiRouter);

module.exports = router;
