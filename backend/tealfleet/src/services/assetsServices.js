const { query } = require("./db/index");

module.exports.assetsGetAllHW = async () => {
  const result = await query(
    `
    SELECT *
    FROM hardware_assets
    JOIN  hardware_catalog
    ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id;
`
  );

  return result.rows;
};

module.exports.assetsGetAllSW = async () => {
  const result = await query(
    `
    SELECT *
    FROM software_assets
    JOIN  software_catalog
    ON software_assets.software_catalog_id = software_catalog.software_catalog_id;
`
  );

  return result.rows;
};
