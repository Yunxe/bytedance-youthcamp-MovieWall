const AUTH_FREE = [
  "/user/register",
  "/user/login",
  "/movie/show-all",
  //"/movie/show-one",
].map((v) => `/api${v}`);

module.exports = AUTH_FREE;
