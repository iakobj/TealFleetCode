const { query } = require("../services/db/index");

// Software Catalog Services

module.exports.SoftwareCatGetAll = async () => {
  const result = query("SELECT * FROM software_catalog");
  return result;
};

module.exports.SoftwareCatGetById = async (id) => {
  const result = query(
    "SELECT * FROM software_catalog WHERE software_catalog_id = $1",
    [id]
  );
  return result;
};

module.exports.SoftwareCatGetByName = async (name) => {
  const result = query("SELECT * FROM software_catalog WHERE model_name = $1", [
    name,
  ]);
  return result;
};

module.exports.SoftwareCatGetByVendor = async (vendor) => {
  const get_vendor_id = await query(
    "SELECT vendor_id FROM vendors WHERE name = $1",
    [vendor]
  );
  vendor_id = get_vendor_id.rows[0].vendor_id;
  const result = await query(
    "SELECT * FROM software_catalog WHERE vendor_id = $1",
    [vendor_id]
  );
  console.log(result);
  return result;
};

module.exports.SoftwareCatGetByVersion = async (version) => {
  const result = query(
    "SELECT * FROM software_catalog WHERE version_number = $1",
    [version]
  );
  return result;
};

// Software Asset Services

module.exports.SoftwareAssGetAll = async () => {
  const result = query("SELECT * FROM software_asset");
  return result;
};

module.exports.SoftwareAssGetById = async (id) => {
  const result = query(
    "SELECT * FROM software_asset WHERE software_asset_id = $1",
    [id]
  );
  return result;
};

module.exports.SoftwareAssGetByName = async (name) => {
  const software_catalog_id = query(
    "SELECT software_catalog_id FROM software_catalog WHERE model_name = $1",
    [name]
  );

  const result = query(
    "SELECT * FROM software_assets WHERE software_catalog_id = $1",
    [software_catalog_id]
  );
  return result;
};

module.exports.SoftwareAssGetByVendor = async (vendor) => {
  const vendor_id = query("SELECT vendor_id FROM vendors WHERE vendor = $1", [
    vendor,
  ]);

  const result = query(
    "SELECT * FROM software_catalog, software_assets WHERE software_catalog.vendor_id = $1",
    [vendor_id]
  );
  return result;
};

module.exports.SoftwareAssGetByVersion = async (version) => {
  const result = query(
    "SELECT * FROM software_asset WHERE software_asset_id = $1",
    [version]
  );
  return result;
};

module.exports.SoftwareAssGetByTenant = async (tenant) => {
  const result = query("SELECT * FROM software_asset WHERE tenant_id = $1", [
    tenant,
  ]);
  return result;
};

module.exports.SoftwareAssGetBySite = async (site) => {
  const result = query("SELECT * FROM software_asset WHERE site_id = $1", [
    site,
  ]);
  return result;
};
