const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")
const jsonwebtoken = require("jsonwebtoken");

userRouter.get("/index", (req, res) => {
    res.end("userRouter index")
})
userRouter.post("/register", async (req, res) => {
    try {
        const {password, username} = req.body
            await User.create({
                password: password,
                username: username
            })
            res.status(200)
            res.send({
                msg: "注册成功",
                code: 1
            })
    } catch (e) {
        console.log(e);
        res.status(200)
        res.send({
            msg: "注册失败:" + e,
            code: 0
        })
    }

})

userRouter.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({
            where: {
                username: username
            }
        })
        if (password === user.password) {
            res.status(200)
            res.send({
                msg: "登录成功",
                code: 1,
                data: "Bear " + jsonwebtoken.sign({username: username}, "myMovie", {expiresIn: "1h"})
            })
        }
    } catch (e) {
        console.log(e);
        res.status(200)
        res.send({
            msg: "登录失败:" + e,
            code: 0
        })
    }
})

userRouter.post("/myMovies", (req, res) => {
    res.end("userRouter myMovies")
})

module.exports = userRouter;