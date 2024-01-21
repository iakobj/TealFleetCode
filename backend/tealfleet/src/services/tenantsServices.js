const { query } = require("../services/db/index");

module.exports.tenantsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

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
    return [{ error: error }];
  }
};

module.exports.tenantsGetById = async (identity, ten_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM tenants WHERE tenant_id = $1", [
        ten_id,
      ]);
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM tenants WHERE tenant_id = $1 AND tenant_id = $2",
        [ten_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.tenantsGetByName = async (identity, tenant_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM tenants WHERE tenant_name = $1",
        [tenant_name]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM tenants WHERE tenant_name = $1 AND tenant_id = $2",
        [tenant_name, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};