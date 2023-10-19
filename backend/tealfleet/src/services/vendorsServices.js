const { query } = require("../services/db/index");

module.exports.vendorsGetAll = async () => {
  const result = await query("SELECT * FROM vendors");
  return result.rows;
};

module.exports.vendorsGetById = async (id) => {
  const result = await query("SELECT * FROM vendors WHERE vendor_id = $1", [id]);
  return result.rows;
};

module.exports.vendorsGetByName = async (name) => {
  const result = await query("SELECT * FROM vendors WHERE name = $1", [name]);
  return result.rows;
};
