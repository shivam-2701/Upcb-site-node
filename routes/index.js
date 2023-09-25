const router = require("express").Router();
const enRouter = require("./enRouter");
const hiRouter = require("./hiRouter");

router.use("/hi", hiRouter);
router.use("/", enRouter);

router.use((req, res, next) => {
  return res.redirect("/hi");
});

module.exports = router;
