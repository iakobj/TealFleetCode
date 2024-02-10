const { query } = require("../services/db/index");

module.exports.navigationMainGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM main_navigation");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM main_navigation");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.navigationMainGetById = async (identity, main_nav_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM main_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM main_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.navigationSubGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM sub_navigation");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM sub_navigation");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.navigationSubGetById = async (identity, main_nav_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM sub_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sub_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.navigationSubGetByName = async (identity, main_nav_item) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_main_nav_id = await query(
      "SELECT main_nav_id FROM main_navigation WHERE main_nav_item = $1",
      [main_nav_item]
    );
    const main_nav_id = get_main_nav_id.rows[0].main_nav_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM sub_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sub_navigation WHERE main_nav_id = $1",
        [main_nav_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};
