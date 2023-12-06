const { query } = require("./db/index");

module.exports.assetsGetAllHW = async () => {
  const result = await query(
    `
    SELECT *
    FROM hardware_assets
    JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
    JOIN tenants ON hardware_assets.tenant_id = tenants.tenant_id
    JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
    JOIN sites ON hardware_assets.site_id = sites.site_id;
`
  );

  return result.rows;
};

module.exports.assetsGetAllSW = async () => {
  const result = await query(
    `
    SELECT *
    FROM software_assets
    JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
    JOIN tenants ON software_assets.tenant_id = tenants.tenant_id
    JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
    JOIN sites ON software_assets.site_id = sites.site_id;
`
  );

  return result.rows;
};

// Returns a number of all appliance suits
module.exports.assetsGetAllSWNum = async () => {
  const result = await query(
    `
    SELECT COUNT(*) FROM software_assets;
`
  );

  return result.rows;
};
