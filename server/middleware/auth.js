const { authToken } = require("../utils/jwt")

const auth = async(req,res,next)=>{
        const raw = req.headers.authorization
        const uid = authToken(raw)
        req.body.uid = uid
        next()
}

module.exports = auth