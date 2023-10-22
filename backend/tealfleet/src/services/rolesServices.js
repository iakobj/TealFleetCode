const { query } = require("./db/index");

module.exports.rolesGetAll = async () => {
  const result = await query("SELECT * FROM roles");
  return result.rows;
};

module.exports.rolesGetById = async (id) => {
  const result = await query("SELECT * FROM roles WHERE role_id = $1", [id]);
  return result.rows;
};

module.exports.rolesGetByRole = async (role) => {
  const result = await query("SELECT * FROM roles WHERE role = $1", [role]);
  return result.rows;
};

module.exports.rolesGetByName = async (name) => {
  const result = await query("SELECT * FROM roles WHERE role_name = $1", [
    name,
  ]);
  return result.rows;
};
