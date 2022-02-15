const express = require("express")
const evaluateRouter = express.Router()

evaluateRouter.post("/evaluate", (req, res) => {
    res.end("evaluateRouter evaluate")
})

module.exports = evaluateRouter;