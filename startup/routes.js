const users = require("../routers/users");
const auth = require("../routers/auth");
const error = require("../middleware/errorMiddleware");

module.exports = function(app) {
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
