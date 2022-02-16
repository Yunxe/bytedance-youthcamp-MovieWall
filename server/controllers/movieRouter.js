const express = require("express");
const movieRouter = express.Router();
const DBMovies = require("../models/movies");

movieRouter.get("/show-all", async (req, res, next) => {
  try {
    const movies = await DBMovies.findAll();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json(new Restful(0, `common error+ ${e.toString()}`));
  }
});

movieRouter.get("/show-one", async (req, res, next) => {
  try {
    const { dbID } = req.body;
    const movies = await DBMovies.findOne({ where: { dbID: dbID } });
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json(new Restful(0, `common error+ ${e.toString()}`));
  }
});

module.exports = movieRouter;