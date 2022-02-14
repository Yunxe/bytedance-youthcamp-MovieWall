const express = require("express")
const userRouter = express.Router()

userRouter.get("/index",(req,res)=>{
    res.end("userRouter index")
})

userRouter.post("/register",(req,res)=>{
    res.end("userRouter register")
})

userRouter.post("/login",(req,res)=>{
    res.end("userRouter login")
})

userRouter.post("/myMovies",(req,res)=>{
    res.end("userRouter myMovies")
})
module.exports = userRouter;