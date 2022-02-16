const { TOKEN_CONFIG } = require("../config");
const jwt = require("jsonwebtoken");

const signToken = (uid) => {
  const token = jwt.sign(
    { iss: "MovieWall", iat: Date.now(), uid: uid },
    TOKEN_CONFIG.tokenSecret,
    { expiresIn: TOKEN_CONFIG.tokenExpiredTime }
  );
  return token;
};

const authToken = (headerJwt) => {
  const token = headerJwt.replace("Bearer ", "")
  const verifiedJwt = jwt.verify(
    token,
    TOKEN_CONFIG.tokenSecret
  );
  const { uid } = verifiedJwt;
  return uid;
};

module.exports = {signToken,authToken};
