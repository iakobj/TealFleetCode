const { query } = require("../services/db/index");

const { checkIdentity } = require("../middlewares/identity");

module.exports.usersGetAll = async (req) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE tenant_id = $1", [
        tenant_id,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetById = async (req, user_id) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE user_id = $1", [user_id]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE user_id = $1 AND tenant_id = $2", [
        user_id, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetByName = async (req, name) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE first_name = $1", [name]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE first_name = $1 AND tenant_id = $2", [
        name, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetByEmail = async (req, email) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE email = $1", [email]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE email = $1 AND tenant_id = $2", [
        email, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetByPhone = async (req, phone) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE phone = $1", [phone]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE phone = $1 AND tenant_id = $2", [
        phone, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetByTitle = async (req, title) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE title = $1", [title]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE title = $1 AND tenant_id = $2", [
        title, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.usersGetByRole = async (req, role) => {
  try {
    const identityCheck = await checkIdentity(req);
    const { tenant_id, tenant_root } = await identityCheck.data;

    const get_role_id = await query("SELECT role_id FROM roles WHERE role_name = $1",[role]);
    const role_id = get_role_id.rows[0].role_id;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM users WHERE role_id = $1", [role_id]);
      return result.rows;
    } else {
      const result = await query("SELECT * FROM users WHERE role_id = $1 AND tenant_id = $2", [
        role_id, tenant_id
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};