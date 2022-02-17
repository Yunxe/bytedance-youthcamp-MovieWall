const express = require("express");
const movieRouter = express.Router();
const DBMovies = require("../models/movies");
const UserDBMovies = require("../models/UserMovie");
const { Restful } = require("../utils");

movieRouter.get("/show-all", async (req, res, next) => {
  try {
    const movies = await DBMovies.findAll();
    res.status(200).json(new Restful(1, "获取成功", movies));
  } catch (e) {
    res.status(500).json(new Restful(0, `common error+ ${e.toString()}`));
  }
});

movieRouter.post("/show-one", async (req, res, next) => {
  try {
    const { dbID, uid } = req.body;

    const movies = await DBMovies.findOne({ where: { dbID: dbID } });
    if (!uid) {
      res.status(200).json(new Restful(1, "获取成功", movies));
    }
    let isCollect = await UserDBMovies.findOne({
      where: {
        uid: uid,
        mid: dbID,
      },
    });
    isCollect = isCollect ? 1 : 0;
    res
      .status(200)
      .json(new Restful(1, "获取成功", { ...movies.toJSON(), isCollect }));
  } catch (e) {
    res.status(500).json(new Restful(0, `common error+ ${e.toString()}`));
  }
});

module.exports = movieRouter;
