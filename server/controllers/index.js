const express = require("express");
const router = express.Router();

router.use("/user", require("./userRouter"))
router.use("/movie", require("./movieRouter"))
router.use("/movie", require("./collectRouter"))

module.exports = router;