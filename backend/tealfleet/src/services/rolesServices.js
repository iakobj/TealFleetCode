const { query } = require("./db/index");

module.exports.rolesGetAll = async () => {
  const result = await query("SELECT * FROM roles");
  return result.rows;
};

module.exports.rolesGetById = async (id) => {
  const result = await query("SELECT * FROM roles WHERE role_id = $1", [id]);
  return result.rows;
};

module.exports.rolesGetByRole = async (type) => {
  const result = await query("SELECT * FROM roles WHERE role_type = $1", [type]);
  return result.rows;
};

module.exports.rolesGetByName = async (name) => {
  const result = await query("SELECT * FROM roles WHERE role_name = $1", [
    name,
  ]);
  return result.rows;
};
