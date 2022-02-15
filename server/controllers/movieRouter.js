const express = require("express")
const movieRouter = express.Router()
const DBMovies= require("../models/movies")
movieRouter.get("/show", async (req, res) => {
    const movies = await DBMovies.findAll()
    res.send(JSON.stringify(movies))
})

module.exports = movieRouter;