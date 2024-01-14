const { query } = require("../services/db/index");
const { checkIdentity } = require("../middlewares/identity");

module.exports.tenantsGetAll = async (req) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM tenants");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM tenants WHERE tenant_id = $1", [
        tenant_id,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.tenantsGetById = async (req, ten_id) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM tenants WHERE tenant_id = $1", [
        ten_id,
      ]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM tenants WHERE tenant_id = $1 AND tenant_id = $2", [
        ten_id, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.tenantsGetByName = async (req, tenant_name) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM tenants WHERE tenant_name = $1", [
        tenant_name,
      ]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM tenants WHERE tenant_name = $1 AND tenant_id = $2", [
        tenant_name, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};