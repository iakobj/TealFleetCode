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

module.exports.SoftwareCatGetByVendor = async (name) => {
  const result = query("SELECT * FROM software_catalog WHERE model_name = $1", [
    name,
  ]);
  return result;
};

module.exports.SoftwareCatGetByVersion = async (name) => {
  const result = query("SELECT * FROM software_catalog WHERE model_name = $1", [
    name,
  ]);
  return result;
};

// Software Asset Services

module.exports.SoftwareAssGetAll = async () => {
  const result = query("SELECT * FROM software_asset");
  return result;
};

module.exports.SoftwareAssGetById = async (id) => {
  const result = query("SELECT * FROM software_asset WHERE software_asset_id = $1", [
    id,
  ]);
  return result;
};

module.exports.SoftwareAssGetByName = async (name) => {
  const result = query("SELECT * FROM software_asset WHERE software_asset_id = $1", [
    name,
  ]);
  return result;
};

module.exports.SoftwareAssGetByVendor = async (vendor) => {
  const result = query("SELECT * FROM software_asset WHERE software_asset_id = $1", [
    vendor,
  ]);
  return result;
};

module.exports.SoftwareAssGetByVersion = async (version) => {
  const result = query("SELECT * FROM software_asset WHERE software_asset_id = $1", [
    version,
  ]);
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
