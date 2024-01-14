const { query } = require("../services/db/index");
const { checkIdentity } = require("../middlewares/identity");

module.exports.vendorsGetAll = async (req) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors");
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.vendorsGetById = async (req, vendor_id) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors WHERE vendor_id = $1", [vendor_id]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors WHERE vendor_id = $1", [vendor_id]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.vendorsGetByName = async (req, vendor_name) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM vendors WHERE vendor_name = $1", [vendor_name]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM vendors WHERE vendor_name = $1", [vendor_name]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};