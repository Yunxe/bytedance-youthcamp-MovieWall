const { authToken } = require("../utils/jwt");
const AUTH_FREE = require("../utils/const");

const auth = async (req, res, next) => {
  const path = req.path;
  if (AUTH_FREE.includes(path)) {
    return next();
  }
  const raw = req.headers.authorization;
  const uid  = authToken(raw);
  console.log(uid)
  req.body.uid = uid;
  next();
};

module.exports = auth;
