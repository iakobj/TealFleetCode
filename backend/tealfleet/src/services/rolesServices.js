const { query } = require("./db/index");

module.exports.rolesGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM roles");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM roles");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.rolesGetById = async (identity, role_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM roles WHERE role_id = $1", [
        role_id,
      ]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM roles WHERE role_id = $1", [
        role_id,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.rolesGetByRole = async (identity, role_type) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM roles WHERE role_type = $1", [
        role_type,
      ]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM roles WHERE role_type = $1", [
        role_type,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.rolesGetByName = async (identity, role_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM roles WHERE role_name = $1", [
        role_name,
      ]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM roles WHERE role_name = $1", [
        role_name,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};
