const { query } = require("./db/index");

module.exports.assetsGetAll = async () => {
  const result = await query("SELECT * FROM tenants");
  return result.rows;
};


