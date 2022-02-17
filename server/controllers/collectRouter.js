const express = require("express");
const { User, DBMovies } = require("../models");
const UserDBMovies = require("../models/UserMovie");
const { Restful } = require("../utils");
const collectRouter = express.Router();

collectRouter.post("/collect", async (req, res, next) => {
  try {
    const { uid, dbID:mid } = req.body;
    const existedAssociation = await UserDBMovies.findOne({
      where: {
        uid: uid,
        mid: mid,
      },
    });
    if (existedAssociation) {
      await existedAssociation.destroy();
      res.status(200).json(new Restful(1, "已取消收藏"));
      return next();
    }
    await UserDBMovies.create({ uid: uid, mid: mid });
    res.status(200).json(new Restful(1, "收藏成功"));
    next();
  } catch (e) {
    res.status(500).json(new Restful(0, `common error+ ${e.toString()}`));
  }
});

module.exports = collectRouter;
