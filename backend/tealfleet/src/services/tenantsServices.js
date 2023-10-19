const { query } = require("../services/db/index");

module.exports.tenantsGetAll = async () => {
  const result = query("SELECT * FROM tenants");
  return result.rows;
};

module.exports.tenantsGetById = async (id) => {
  const result = query("SELECT * FROM tenants WHERE tenant_id = $1", [id]);
  return result.rows;
};

module.exports.tenantsGetByName = async (name) => {
  const result = query("SELECT * FROM tenants WHERE tenant_name = $1", [name]);
  return result.rows;
};
