const { query } = require("../services/db/index");

// Software Catalog Services

module.exports.softwareCatGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM software_catalog");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM software_catalog;");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetById = async (identity, software_catalog_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_catalog_id = $1",
        [software_catalog_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_catalog_id = $1",
        [software_catalog_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetByName = async (identity, software_model_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_model_name = $1",
        [software_model_name]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_model_name = $1",
        [software_model_name]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetByVendor = async (identity, vendor_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_vendor_id = await query(
      "SELECT vendor_id FROM vendors WHERE vendor_name = $1",
      [vendor_name]
    );
    const vendor_id = get_vendor_id.rows[0].vendor_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetByVersion = async (
  identity,
  software_version_number
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_version_number = $1",
        [software_version_number]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_catalog WHERE software_version_number = $1",
        [software_version_number]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetByCategory = async (identity, sw_category) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_category_id = await query(
      "SELECT sw_category_id FROM sw_categories WHERE sw_category = $1",
      [sw_category]
    );

    const sw_category_id = get_category_id.rows[0].sw_category_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_catalog WHERE sw_category_id = $1",
        [sw_category_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_catalog WHERE sw_category_id = $1",
        [sw_category_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetSWModelName = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT DISTINCT software_model_name FROM software_catalog"
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT DISTINCT software_model_name FROM software_catalog"
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareCatGetSWModelNameByVendor = async (
  identity,
  vendor_name
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_vendor_id = await query(
      "SELECT vendor_id FROM vendors WHERE vendor_name = $1",
      [vendor_name]
    );
    const vendor_id = get_vendor_id.rows[0].vendor_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT DISTINCT software_model_name, 'SW' as asset_type  FROM software_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT DISTINCT software_model_name, 'SW' as asset_type  FROM software_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

// Software Asset Services

module.exports.softwareAssGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM software_assets");
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_assets WHERE tenant_id = $1",
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetById = async (identity, software_asset_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_assets WHERE software_asset_id = $1",
        [software_asset_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_assets WHERE software_asset_id = $1 AND tenant_id = $2",
        [software_asset_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetByName = async (identity, software_model_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_software_catalog_id = await query(
      "SELECT software_catalog_id FROM software_catalog WHERE software_model_name = $1",
      [software_model_name]
    );
    const software_catalog_id =
      get_software_catalog_id.rows[0].software_catalog_id;
    console.log(software_catalog_id);

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM software_assets WHERE software_catalog_id = $1",
        [software_catalog_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM software_assets WHERE software_catalog_id = $1 AND tenant_id = $2",
        [software_catalog_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetByVendor = async (identity, vendor_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_vendor_id = await query(
      "SELECT vendor_id FROM vendors WHERE vendor_name = $1",
      [vendor_name]
    );
    const vendor_id = get_vendor_id.rows[0].vendor_id;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE vendor_id = $1;
    `,
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE vendor_id = $1 AND tenant_id = $2;
    `,
        [vendor_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetByVersion = async (
  identity,
  software_version_number
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE software_version_number = $1;
    `,
        [software_version_number]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE software_version_number = $1 AND tenant_id = $2;
    `,
        [software_version_number, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetByTenant = async (identity, tenant_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_tenant_id = await query(
      "SELECT tenant_id FROM tenants WHERE tenant_name = $1",
      [tenant_name]
    );
    ten_id = get_tenant_id.rows[0].tenant_id;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE tenant_id = $1;
    `,
        [ten_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE tenant_id = $1;
    `,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.softwareAssGetBySite = async (identity, site_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;
    const get_site_id = await query(
      "SELECT site_id FROM sites WHERE site_name = $1",
      [site_name]
    );
    site_id = get_site_id.rows[0].site_id;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE site_id = $1;
    `,
        [site_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM software_assets
      JOIN software_catalog
      ON software_catalog.software_catalog_id = software_assets.software_catalog_id
      WHERE site_id = $1 AND tenant_id = $2;
    `,
        [site_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};
