const loggerWinston = require("../startup/winston");
const config = require("config");

module.exports = function() {
  const jwt = config.get("jwtPrivateKey");
  if (!jwt) {
    loggerWinston().error("FATAL ERROR: jwtPrivateKey is not defined.");
    process.exit(1);
  } else {
    loggerWinston().info(`jwtPrivateKey is OK ${jwt}`);
  }
};
