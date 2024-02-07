const { query } = require("./db/index");

module.exports.contractsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(`
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id;
      `);
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetAllNo = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT COUNT(DISTINCT contract_id) FROM contracts;"
      );
      return result.rows;
    } else {
      const result = await query(
        `SELECT COUNT(DISTINCT contracts.contract_id)
        FROM contracts
        WHERE contracts.tenant_id = $1;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetByTenant = async (identity, ten_id) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1`,
        [ten_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hwContractsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(`
      SELECT *
      FROM hw_asset_contracts
      JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
      JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id;
    `);
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM hw_asset_contracts
      JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
      JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id;
      WHERE contracts.tenant_id = $1`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.swContractsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(`
        SELECT *
        FROM sw_asset_contracts
        JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id;
      `);
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT *
        FROM sw_asset_contracts
        JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
        WHERE contracts.tenant_id = $1;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.swContractsGetByContractNo = async (identity, contract_no) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        `
      SELECT *
      FROM sw_asset_contracts
      JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
      JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
      JOIN sites ON software_assets.site_id = sites.site_id
      JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
      JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
      WHERE contracts.contract_no = $1; `,
        [contract_no]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM sw_asset_contracts
      JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
      JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
      JOIN sites ON software_assets.site_id = sites.site_id
      JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
      JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
      WHERE contracts.contract_no = $1 AND contracts.tenant_id = $2`,
        [contract_no, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hwContractsGetByContractNo = async (identity, contract_no) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        `
        SELECT *
        FROM hw_asset_contracts
        JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
        JOIN sites ON hardware_assets.site_id = sites.site_id
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        WHERE contracts.contract_no = $1;`,
        [contract_no]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT *
        FROM hw_asset_contracts
        JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
        JOIN sites ON hardware_assets.site_id = sites.site_id
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        WHERE contracts.contract_no = $1 AND contracts.tenant_id = $2`,
        [contract_no, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.swContractsGetNo = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT COUNT(DISTINCT software_asset_id) FROM sw_asset_contracts;"
      );
      return result.rows;
    } else {
      const result = await query(
        `SELECT COUNT(DISTINCT sw_asset_contracts.software_asset_id)
        FROM sw_asset_contracts
        JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        WHERE contracts.tenant_id = $1;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.hwContractsGetNo = async (identity) => {
  try {
    const { tenant_id, tenant_root } = await identity.data;

    if (tenant_root == true) {
      const result = await query(
        "SELECT COUNT(DISTINCT hardware_asset_id) FROM hw_asset_contracts;"
      );
      return result.rows;
    } else {
      const result = await query(
        `SELECT COUNT(DISTINCT hw_asset_contracts.hardware_asset_id)
        FROM hw_asset_contracts
        JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        WHERE contracts.tenant_id = $1;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};
