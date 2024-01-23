const { query } = require("../services/db/index");

module.exports.sitesGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;
    if (tenant_root == true) {
      const result = await query("SELECT * FROM sites");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM sites WHERE tenant_id = $1", [
        tenant_id,
      ]);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.sitesGetById = async (identity, site_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM sites WHERE site_id = $1", [
        site_id,
      ]);
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_id = $1 AND tenant_id = $2",
        [site_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.sitesGetByName = async (identity, site_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM sites WHERE site_name = $1", [
        site_name,
      ]);
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_name = $1 AND tenant_id = $2",
        [site_name, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.sitesGetByAddress = async (identity, site_address) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM sites WHERE site_address = $1",
        [site_address]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_address = $1 AND tenant_id = $2",
        [site_address, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.sitesGetByCity = async (identity, site_city) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM sites WHERE site_city = $1", [
        site_city,
      ]);
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_city = $1 AND tenant_id = $2",
        [site_city, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.sitesGetByPostcode = async (identity, site_postcode) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM sites WHERE site_postcode = $1",
        [site_postcode]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_postcode = $1 AND tenant_id = $2",
        [site_postcode, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.sitesGetByCountry = async (identity, site_country) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM sites WHERE site_country = $1",
        [site_country]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE site_country = $1 AND tenant_id = $2",
        [site_country, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};

module.exports.sitesGetByTenant = async (identity, ten_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM sites WHERE ten_id = $1", [
        ten_id,
      ]);
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM sites WHERE ten_id = $1 AND tenant_id = $2",
        [ten_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: `${error}` }];
  }
};
