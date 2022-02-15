const { TOKEN_CONFIG } = require("../config");
const jwt = require("jsonwebtoken");

const signToken = (userName) => {
  const token = jwt.sign(
    { iss: "MovieWall", iat: Date.now(), userName: userName },
    TOKEN_CONFIG.tokenSecret,
    { expiresIn: TOKEN_CONFIG.tokenExpiredTime }
  );
  return token;
};

module.exports = signToken