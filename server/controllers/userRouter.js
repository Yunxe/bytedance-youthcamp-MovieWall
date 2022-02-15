const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const {Restful, filterObject} = require("../utils");
const signToken = require("../utils/jwt");

userRouter.get("/index", (req, res) => {
  res.end("userRouter index");
});

userRouter.post("/register", async (req, res,next) => {
  try {
    const { password, userName } = req.body;
    const existedUser = await User.findOne({where:{
        userName:userName
    }})
    if(existedUser){
        res.status(200).json(new Restful(0,"用户名已存在"))
        return next()
    }

    const user = await User.create({
      password: password,
      userName: userName,
    });
    res.status(200).json(new Restful(1,"注册成功",user.toJSON()))
    next()
  } catch (e) {
    res.status(500).json(new Restful(0,`common error+ ${e.toString()}`))
}})

userRouter.post("/login", async (req, res,next) => {
  try {
    const { userName, password } = req.body;
    const existedUser = await User.findOne({
      where: {
        userName: userName,
      },
    });
    if(!existedUser||password !== existedUser.password){
        res.status(200).json(new Restful(0,"用户名或密码错误"))
        return next()
    }
    const token = signToken(userName)
    res.status(200).json(new Restful(1,"登录成功",{...filterObject(existedUser.toJSON(),["password"]),token}))
    next()
  } catch (e) {
    res.status(500).json(new Restful(0,`common error+ ${e.toString()}`))
  }
});

// userRouter.post("/myMovies", (req, res) => {
//   res.end("userRouter myMovies");
// });

module.exports = userRouter;
