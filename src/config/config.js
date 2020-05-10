const dev_config = require("./dev_config");
const staging_config = require("./staging_config");
const prod_config = require("./prod_config");

module.exports.loadConfig = function(app_env) {
  if (app_env === "prod") {
    return prod_config;
  } else if (app_env === "staging") {
    return staging_config;
  }
  return dev_config;
};
