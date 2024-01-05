const { query } = require("./db/index");

module.exports.contractsGetAll = async () => {
  const result = await query(`
  SELECT * 
  FROM contracts
  JOIN tenants ON contracts.tenant_id = tenants.tenant_id
  JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id;
  `);
  return result.rows;
};

module.exports.contractsGetByTenant = async (tenant) => {
  const result = await query(`
  SELECT * 
  FROM contracts
  JOIN tenants ON contracts.tenant_id = tenants.tenant_id
  JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
  WHERE contracts.tenant_id = $1
  `, [tenant]
  );

  return result.rows;
};

module.exports.hwContractsGetAll = async () => {
    const result = await query(`
    SELECT *
    FROM hw_asset_contracts
    JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
    JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id;
    `);
    return result.rows;
};

module.exports.swContractsGetAll = async () => {
    const result = await query(`
    SELECT *
    FROM sw_asset_contracts
    JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
    JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id;
    `);
    return result.rows;
};

module.exports.swContractsGetByContractNo = async (contract_no) => {
  const result = await query(`
  SELECT *
  FROM sw_asset_contracts
  JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
  JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
  WHERE contracts.contract_no = $1; `, [contract_no]);
  return result.rows;
};

module.exports.hwContractsGetByContractNo = async (contract_no) => {
  const result = await query(`
  SELECT *
  FROM hw_asset_contracts
  JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
  JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
  WHERE contracts.contract_no = $1;`, [contract_no]);
  return result.rows;
};






