const { index: db } = require("../services/db/index");

module.exports.tenantsGetAll = () => {
  const result = db.query("SELECT * FROM tenants");
  return result;
};

module.exports.tenantsGetById = (id) => {
  return { id };
};
