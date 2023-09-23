const { query } = require("../services/db/index");

module.exports.vendorsGetAll = async () => {
  const result = query("SELECT * FROM vendors");
  return result;
};

module.exports.vendorsGetById = async (id) => {
  const result = query("SELECT * FROM vendors WHERE vendor_id = $1", [id]);
  return result;
};

module.exports.vendorsGetByName = async (name) => {
  const result = query("SELECT * FROM vendors WHERE name = $1", [name]);
  return result;
};
