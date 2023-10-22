const { query } = require("../services/db/index");

// Hardware Catalog Services

module.exports.hardwareCatGetAll = async () => {
  const result = await query("SELECT * FROM hardware_catalog");
  return result.rows;
};

module.exports.hardwareCatGetById = async (id) => {
  const result = await query(
    "SELECT * FROM hardware_catalog WHERE hardware_catalog_id = $1",
    [id]
  );
  return result.rows;
};

module.exports.hardwareCatGetByName = async (name) => {
  const result = await query(
    "SELECT * FROM hardware_catalog WHERE model_name = $1",
    [name]
  );
  return result.rows;
};

module.exports.hardwareCatGetByVendor = async (vendor) => {
  const get_vendor_id = await query(
    "SELECT vendor_id FROM vendors WHERE name = $1",
    [vendor]
  );
  vendor_id = get_vendor_id.rows[0].vendor_id;
  const result = await query(
    "SELECT * FROM hardware_catalog WHERE vendor_id = $1",
    [vendor_id]
  );

  return result.rows;
};

module.exports.hardwareCatGetByVersion = async (version) => {
  const result = await query(
    "SELECT * FROM hardware_catalog WHERE version_number = $1",
    [version]
  );
  return result.rows;
};

module.exports.hardwareCatGetByCategory = async (category) => {
    const get_category_id = await query(
      "SELECT hw_category_id FROM hw_categories WHERE category = $1",
      [category]
    );
    const hw_category_id = get_category_id.rows[0].hw_category_id;
    const result = await query(
      "SELECT * FROM hardware_catalog WHERE hw_category_id = $1",
      [hw_category_id]
    );
  
    return result.rows;
  };

// Hardware Asset Services

module.exports.hardwareAssGetAll = async () => {
  const result = await query("SELECT * FROM hardware_asset");
  return result.rows;
};

module.exports.hardwareAssGetById = async (id) => {
  const result = await query(
    "SELECT * FROM hardware_asset WHERE hardware_asset_id = $1",
    [id]
  );
  return result.rows;
};

module.exports.hardwareAssGetByName = async (name) => {
  const get_hardware_catalog_id = await query(
    "SELECT hardware_catalog_id FROM hardware_catalog WHERE model_name = $1",
    [name]
  );
  hardware_catalog_id = get_hardware_catalog_id.rows[0].hardware_catalog_id;
  console.log(hardware_catalog_id);

  const result = await query(
    "SELECT * FROM hardware_assets WHERE hardware_catalog_id = $1",
    [hardware_catalog_id]
  );
  return result.rows;
};

module.exports.hardwareAssGetByVendor = async (vendor) => {
  const get_vendor_id = await query(
    "SELECT vendor_id FROM vendors WHERE name = $1",
    [vendor]
  );
  vendor_id = get_vendor_id.rows[0].vendor_id;
  // Create the temporary table
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
};

module.exports.hardwareAssGetByVersion = async (version) => {
  // Create the temporary table
  const result = await query(
    `
    SELECT *
    FROM hardware_assets
    JOIN hardware_catalog
    ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
    WHERE version_number = $1;
  `,
    [version]
  );

  return result.rows;
};

module.exports.hardwareAssGetByTenant = async (tenant) => {
  const get_tenant_id = await query(
    "SELECT tenant_id FROM tenants WHERE tenant_name = $1",
    [tenant]
  );
  tenant_id = get_tenant_id.rows[0].tenant_id;

  // Create the temporary table
  const result = await query(
    `
    SELECT *
    FROM hardware_assets
    JOIN hardware_catalog
    ON hardware_catalog.hardware_catalog_id = hardware_assets.hardware_catalog_id
    WHERE tenant_id = $1;
  `,
    [tenant_id]
  );

  return result.rows;
};

module.exports.hardwareAssGetBySite = async (site) => {
  const get_site_id = await query("SELECT site_id FROM sites WHERE name = $1", [
    site,
  ]);
  site_id = get_site_id.rows[0].site_id;

  // Create the temporary table
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
};
