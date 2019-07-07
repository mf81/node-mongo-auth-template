const express = require("express");
require("express-async-errors");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const app = express();
app.use(express.json());

require("./startup/db")();
require("./startup/routes")(app);
require("./startup/jwt")();
require("./startup/prod")(app);
const loggerWinston = require("./startup/winston");

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  loggerWinston().info(`Lisning on: ${port}`);
});

module.exports = server;