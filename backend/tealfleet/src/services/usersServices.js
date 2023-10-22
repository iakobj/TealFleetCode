const { query } = require("../services/db/index");

module.exports.usersGetAll = async () => {
  const result = await query("SELECT * FROM users");
  return result.rows;
};

module.exports.usersGetById = async (id) => {
  const result = await query("SELECT * FROM users WHERE user_id = $1", [id]);
  return result.rows;
};

module.exports.usersGetByName = async (name) => {
  const result = await query("SELECT * FROM users WHERE first_name = $1", [
    name,
  ]);
  return result.rows;
};

module.exports.usersGetByEmail = async (email) => {
  const result = await query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows;
};

module.exports.usersGetByPhone = async (phone) => {
  const result = await query("SELECT * FROM users WHERE phone = $1", [phone]);
  return result.rows;
};

module.exports.usersGetByTitle = async (title) => {
  const result = await query("SELECT * FROM users WHERE title = $1", [title]);
  return result.rows;
};

module.exports.usersGetByRole = async (role) => {
  const get_role_id = await query(
    "SELECT role_id FROM roles WHERE role_name = $1",
    [role]
  );

  const role_id = get_role_id.rows[0].role_id;

  const result = await query("SELECT * FROM users WHERE role_id = $1", [
    role_id,
  ]);

  return result.rows;
};
