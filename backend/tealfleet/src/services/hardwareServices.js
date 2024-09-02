const { query } = require("../services/db/index");

// Hardware Catalog Services

module.exports.hardwareCatGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM hardware_catalog");
      return result.rows;
    } else {
      const result = await query("SELECT * FROM hardware_catalog");
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetById = async (hardware_catalog_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_catalog_id = $1",
        [hardware_catalog_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_catalog_id = $1",
        [hardware_catalog_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetByName = async (identity, hardware_model_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_model_name = $1",
        [hardware_model_name]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_model_name = $1",
        [hardware_model_name]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetByVendor = async (identity, vendor_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_vendor_id = await query(
      "SELECT vendor_id FROM vendors WHERE vendor_name = $1",
      [vendor_name]
    );
    const vendor_id = get_vendor_id.rows[0].vendor_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetByPartnumber = async (
  identity,
  hardware_part_number
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_part_number = $1",
        [hardware_part_number]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_part_number = $1",
        [hardware_part_number]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetByCategory = async (identity, hw_category) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_category_id = await query(
      "SELECT hw_category_id FROM hw_categories WHERE hw_category = $1",
      [hw_category]
    );

    const hw_category_id = get_category_id.rows[0].hw_category_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hw_category_id = $1",
        [hw_category_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hw_category_id = $1",
        [hw_category_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetHWModelName = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT DISTINCT hardware_model_name FROM hardware_catalog"
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT DISTINCT hardware_model_name FROM hardware_catalog"
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareCatGetByHWModelName = async (identity, hardware_model_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    console.log(hardware_model_name);

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_model_name = $1", [hardware_model_name]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_catalog WHERE hardware_model_name = $1", [hardware_model_name]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.HardwareCatGetHWModelNameByVendor = async (identity, vendor_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_vendor_id = await query(
      "SELECT vendor_id FROM vendors WHERE vendor_name = $1",
      [vendor_name]
    );
    const vendor_id = get_vendor_id.rows[0].vendor_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT DISTINCT hardware_model_name, 'HW' as asset_type FROM hardware_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT DISTINCT hardware_model_name, 'HW' as asset_type FROM hardware_catalog WHERE vendor_id = $1",
        [vendor_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

// Hardware Asset Services

module.exports.hardwareAssGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query("SELECT * FROM hardware_assets");
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE tenant_id = $1",
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetById = async (identity, hardware_asset_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_asset_id = $1",
        [hardware_asset_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_asset_id = $1 AND tenant_id = $2",
        [hardware_asset_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetByName = async (identity, hardware_model_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_hardware_catalog_id = await query(
      "SELECT hardware_catalog_id FROM hardware_catalog WHERE hardware_model_name = $1",
      [hardware_model_name]
    );
    const ehardware_catalog_id =
      get_hardware_catalog_id.rows[0].hardware_catalog_id;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_catalog_id = $1",
        [hardware_catalog_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_catalog_id = $1 AND tenant_id = $2",
        [hardware_catalog_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetByVendor = async (identity, vendor_name) => {
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
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE vendor_id = $1;
    `,
        [vendor_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
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

module.exports.hardwareAssGetByPartnumber = async (
  identity,
  hardware_part_number
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE hardware_part_number = $1;
    `,
        [hardware_part_number]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE hardware_part_number = $1 AND tenant_id = $2;
    `,
        [hardware_part_number, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetBySerialnumber = async (
  identity,
  hardware_serial_no
) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_serial_no = $1",
        [hardware_serial_no]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT * FROM hardware_assets WHERE hardware_serial_no = $1 AND tenant_id = $2",
        [hardware_serial_no, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetByTenant = async (identity, tenant_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_tenant_id = await query(
      "SELECT tenant_id FROM tenants WHERE tenant_name = $1",
      [tenant_name]
    );
    const ten_id = get_tenant_id.rows[0].tenant_id;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE tenant_id = $1;
    `,
        [ten_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE tenant_id = $1 AND tenant_id = $2;
    `,
        [ten_id, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hardwareAssGetBySite = async (identity, site_name) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    const get_site_id = await query(
      "SELECT site_id FROM sites WHERE site_name = $1",
      [site_name]
    );
    const site_id = get_site_id.rows[0].site_id;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
      WHERE site_id = $1;
    `,
        [site_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM hardware_assets
      JOIN hardware_catalog
      ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
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
