const AUTH_FREE = ["/user/register", "/user/login", "/movie/show"].map(
  (v) => `/api${v}`
);

module.exports = AUTH_FREE;
