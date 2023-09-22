const { query } = require("../services/db/index");

module.exports.usersGetAll = async () => {
  const result = query("SELECT * FROM users");
  return result;
};

module.exports.usersGetById = async (id) => {
  const result = query("SELECT * FROM users WHERE user_id = $1", [id]);
  return result;
};

module.exports.usersGetByName = async (name) => {
  const result = query("SELECT * FROM users WHERE first_name = $1", [name]);
  return result;
};

module.exports.usersGetByEmail = async (email) => {
  const result = query("SELECT * FROM users WHERE email = $1", [email]);
  return result;
};

module.exports.usersGetByPhone = async (phone) => {
  const result = query("SELECT * FROM users WHERE phone = $1", [phone]);
  return result;
};

module.exports.usersGetByTitle = async (title) => {
  const result = query("SELECT * FROM users WHERE title = $1", [title]);
  return result;
};
