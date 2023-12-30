const { query } = require("./db/index");

module.exports.authLogin = async () => {
  const result = await query(
    `
    SELECT *
    FROM users;
`
  );

  return result.rows;
};

module.exports.authGetUserByEmail = async (email) => {
  const result = await query("SELECT * FROM users WHERE email = $1", [email]);

  return result.rows;
};

module.exports.authLogout = async () => {
  const result = await query(
    `
    SELECT *
    FROM users;
`
  );

  return result.rows;
};

module.exports.authRegister = async () => {
  const result = await query(
    `
    SELECT *
    FROM users;
  `
  );

  return result.rows;
};
