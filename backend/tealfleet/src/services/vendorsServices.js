const { query } = require("../services/db/index");
const { checkIdentity } = require("../middlewares/identity");

module.exports.vendorsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.vendorsGetById = async (identity, vendor_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors WHERE vendor_id = $1", [vendor_id]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors WHERE vendor_id = $1", [vendor_id]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.vendorsGetByName = async (identity, vendor_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors WHERE vendor_name = $1", [vendor_name]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors WHERE vendor_name = $1", [vendor_name]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};