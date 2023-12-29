const { query } = require("../services/db/index");

// Software Catalog Services

module.exports.softwareCatGetAll = async () => {
  const result = await query("SELECT * FROM software_catalog");
  return result.rows;
};

module.exports.softwareCatGetById = async (id) => {
  const result = await query(
    "SELECT * FROM software_catalog WHERE software_catalog_id = $1",
    [id]
  );
  return result.rows;
};

module.exports.softwareCatGetByName = async (name) => {
  const result = await query(
    "SELECT * FROM software_catalog WHERE software_model_name = $1",
    [name]
  );
  return result.rows;
};

module.exports.softwareCatGetByVendor = async (vendor) => {
  const get_vendor_id = await query(
    "SELECT vendor_id FROM vendors WHERE name = $1",
    [vendor]
  );
  vendor_id = get_vendor_id.rows[0].vendor_id;
  const result = await query(
    "SELECT * FROM software_catalog WHERE vendor_id = $1",
    [vendor_id]
  );

  return result.rows;
};

module.exports.softwareCatGetByVersion = async (version) => {
  const result = await query(
    "SELECT * FROM software_catalog WHERE version_number = $1",
    [version]
  );
  return result.rows;
};

module.exports.softwareCatGetByCategory = async (category) => {
  const get_category_id = await query(
    "SELECT sw_category_id FROM sw_categories WHERE sw_category = $1",
    [category]
  );

  const sw_category_id = get_category_id.rows[0].sw_category_id;
  const result = await query(
    "SELECT * FROM software_catalog WHERE sw_category_id = $1",
    [sw_category_id]
  );

  return result.rows;
};

module.exports.softwareCatGetSWModelName = async () => {
  const result = await query("SELECT DISTINCT software_model_name FROM software_catalog");
  return result.rows;
};

// Software Asset Services

module.exports.softwareAssGetAll = async () => {
  const result = await query("SELECT * FROM software_assets");
  return result.rows;
};

module.exports.softwareAssGetById = async (id) => {
  const result = await query(
    "SELECT * FROM software_assets WHERE software_asset_id = $1",
    [id]
  );
  return result.rows;
};

module.exports.softwareAssGetByName = async (name) => {
  const get_software_catalog_id = await query(
    "SELECT software_catalog_id FROM software_catalog WHERE software_model_name = $1",
    [name]
  );
  const software_catalog_id = get_software_catalog_id.rows[0].software_catalog_id;
  console.log(software_catalog_id);

  const result = await query(
    "SELECT * FROM software_assets WHERE software_catalog_id = $1",
    [software_catalog_id]
  );
  return result.rows;
};

module.exports.softwareAssGetByVendor = async (vendor) => {
  const get_vendor_id = await query(
    "SELECT vendor_id FROM vendors WHERE name = $1",
    [vendor]
  );
  vendor_id = get_vendor_id.rows[0].vendor_id;
  // Create the temporary table
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
};

module.exports.softwareAssGetByVersion = async (version) => {
  // Create the temporary table
  const result = await query(
    `
    SELECT *
    FROM software_assets
    JOIN software_catalog
    ON software_catalog.software_catalog_id = software_assets.software_catalog_id
    WHERE version_number = $1;
  `,
    [version]
  );

  return result.rows;
};

module.exports.softwareAssGetByTenant = async (tenant) => {
  const get_tenant_id = await query(
    "SELECT tenant_id FROM tenants WHERE tenant_name = $1",
    [tenant]
  );
  tenant_id = get_tenant_id.rows[0].tenant_id;

  // Create the temporary table
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
};

module.exports.softwareAssGetBySite = async (site) => {
  const get_site_id = await query("SELECT site_id FROM sites WHERE name = $1", [
    site,
  ]);
  site_id = get_site_id.rows[0].site_id;

  // Create the temporary table
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
};
