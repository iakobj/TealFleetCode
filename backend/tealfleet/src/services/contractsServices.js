const { query } = require("./db/index");

module.exports.contractsGetAll = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id;
      `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1`,
        [mock_tenant_id]
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

module.exports.contractsGetAllNo = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(
        "SELECT COUNT(DISTINCT contract_id) FROM contracts;"
      );
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `SELECT COUNT(DISTINCT contracts.contract_id)
        FROM contracts
        WHERE contracts.tenant_id = $1;`,
        [mock_tenant_id]
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
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
      SELECT *
      FROM hw_asset_contracts
      JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
      JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id;
    `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
      SELECT *
      FROM hw_asset_contracts
      JOIN contracts ON hw_asset_contracts.contract_id = contracts.contract_id
      JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id;
      WHERE contracts.tenant_id = $1`,
        [mock_tenant_id]
      );
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
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
        SELECT *
        FROM sw_asset_contracts
        JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id;
      `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT *
        FROM sw_asset_contracts
        JOIN contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
        WHERE contracts.tenant_id = $1;`,
        [mock_tenant_id]
      );
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
      FROM contracts
      JOIN tenants ON contracts.tenant_id = tenants.tenant_id
      JOIN sw_asset_contracts ON sw_asset_contracts.contract_id = contracts.contract_id
      JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
      LEFT JOIN sites ON software_assets.site_id = sites.site_id
      JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
      JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
      JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
      WHERE contracts.contract_no = $1; `,
        [contract_no]
      );
      return result.rows;
    } else {
      const result = await query(
        `
      SELECT *
      FROM contracts
      JOIN tenants ON contracts.tenant_id = tenants.tenant_id
      JOIN sw_asset_contracts ON sw_asset_contracts.contract_id = contracts.contract_id
      JOIN software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
      LEFT JOIN sites ON software_assets.site_id = sites.site_id
      JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
      JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
      JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
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
        FROM contracts 
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN hw_asset_contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
        LEFT JOIN sites ON hardware_assets.site_id = sites.site_id
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.contract_no = $1;`,
        [contract_no]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT *
        FROM contracts 
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN hw_asset_contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        LEFT JOIN hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
        JOIN sites ON hardware_assets.site_id = sites.site_id
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.contract_no = $1 AND contracts.tenant_id = $2`,
        [contract_no, tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetValid = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
  FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      RIGHT JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to > CURRENT_DATE
  ) AS subquery;
        `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(` 
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
  FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      RIGHT JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to > CURRENT_DATE
      AND contracts.tenant_id = $1
  ) AS subquery;`,
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(`
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
  FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      RIGHT JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to > CURRENT_DATE
      AND contracts.tenant_id = $1
  ) AS subquery;`,
        [tenant_id]
      );
      
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetInvalid = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
      FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      FULL JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to < CURRENT_DATE
      ) AS subquery;
        `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(` 
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
      FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      FULL JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to < CURRENT_DATE
      AND contracts.tenant_id = $1
      ) AS subquery;`,
        [mock_tenant_id]
      );
      return result.rows;
      } else {
      const result = await query(`
      SELECT 
      COUNT(*) OVER () AS total_count,
      subquery.*
      FROM (
      SELECT DISTINCT
          sw.software_asset_id,
          hw.hardware_asset_id
      FROM sw_asset_contracts sw
      FULL JOIN contracts ON contracts.contract_id = sw.contract_id
      LEFT JOIN hw_asset_contracts hw ON hw.contract_id = contracts.contract_id
      WHERE contracts.contract_valid_to < CURRENT_DATE
      AND contracts.tenant_id = $1
      ) AS subquery;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.supportGetContracts = async (identity, searchParams) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    let queryText = `
    SELECT
    COUNT(*) OVER () AS total_count,
    c.contract_id,
    c.tenant_id,
    c.contract_type_id,
    c.contractor_name,
    c.contract_sla,
    c.contract_no,
    c.contract_description,
    c.contract_valid_from,
    c.contract_valid_to,
    c.contract_changed_at,
    c.contract_created_at,
    tenants.tenant_id,
    tenants.is_root,
    tenants.tenant_name,
    contract_types.contract_type_id,
    contract_types.type,
    contract_types.description,
    CASE
        WHEN c.contract_valid_to > CURRENT_DATE THEN 'true'
        WHEN c.contract_valid_to <= CURRENT_DATE THEN 'false'
        ELSE 'Unknown' -- Add an ELSE condition if needed
    END AS contract_valid
    FROM 
        contracts c
    JOIN 
        tenants ON c.tenant_id = tenants.tenant_id
    JOIN 
        contract_types ON c.contract_type_id = contract_types.contract_type_id
    WHERE 
    1 = 1
    `;

    const queryParams = []; // Array to hold query parameters

    // Add conditions based on search parameters
    if (searchParams.searchTenant !== false || tenant_root == false) {
      if (tenant_root == true) {
        queryText += ` AND tenants.tenant_name = $${queryParams.length + 1}`;
        queryParams.push(searchParams.searchTenant);
      } else if (tenant_root == false) {
        queryText += ` AND tenants.tenant_id = $${queryParams.length + 1}`;
        queryParams.push(tenant_id);
      }
    }
    if (searchParams.searchValidity !== false) {
      if (searchParams.searchValidity == "Active") {
        queryText += ` AND c.contract_valid_to > CURRENT_DATE`;

      } else if (searchParams.searchValidity == "Inactive") {
        queryText += ` AND c.contract_valid_to < CURRENT_DATE`;

      }
    }
    if (searchParams.searchContractor !== false) {
      queryText += ` AND c.contractor_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchContractor);
    }
    if (true) {
      queryText += ` LIMIT 24 OFFSET $${queryParams.length + 1};`;
      queryParams.push(searchParams.searchOffset);
    } 
    if (tenant_root == true && mock_tenant_id == undefined) {
      console.log(queryText, queryParams);
      const result = await query(queryText, queryParams);
      console.log(result);
      return result.rows;

    } else {
      console.log(queryText, queryParams);
      const result = await query(queryText, queryParams);
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetAllContractTypes = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(`
        SELECT * 
        FROM contract_types;
      `);
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT * 
        FROM contract_types
        WHERE tenant_id = $1;`,
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT * 
        FROM contract_types
        WHERE tenant_id = $1;`,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsGetByContractNoBasic = async (
  identity,
  contract_no
) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;
    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.contract_no = $1;
      `,
        [contract_no]
      );
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1 AND contracts.contract_no = $2;`,
        [mock_tenant_id, contract_no]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT * 
        FROM contracts
        JOIN tenants ON contracts.tenant_id = tenants.tenant_id
        JOIN contract_types ON contracts.contract_type_id = contract_types.contract_type_id
        WHERE contracts.tenant_id = $1 AND contracts.contract_no = $2;`,
        [tenant_id, contract_no]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

//Work in progress
module.exports.contractsGetByAssetId = async (identity, asset_id) => {
  try {
    
    const { tenant_id, tenant_root } = await identity.data;

    const sw = await query(`SELECT COUNT(*) FROM software_assets WHERE software_asset_id = $1;`, [asset_id]);
    const swRowCount = sw.rows[0].count;


    const hw = await query(`SELECT COUNT(*) FROM hardware_assets WHERE hardware_asset_id = $1;`, [asset_id]);
    const hwRowCount = hw.rows[0].count;


    if (swRowCount != 0 && swRowCount > 0 ) {
      const result = await query(`
        SELECT 
          sw_asset_contracts.*, 
          software_assets.*, 
          contracts.*, 
          'SW' AS asset_type
        FROM 
          sw_asset_contracts
        JOIN 
          software_assets ON sw_asset_contracts.software_asset_id = software_assets.software_asset_id
        JOIN 
          contracts ON sw_asset_contracts.contract_id = contracts.contract_id
        WHERE 
          sw_asset_contracts.software_asset_id = $1;
      `, [asset_id]);
    
      return result.rows;
    


    } else if (hwRowCount != 0 && hwRowCount > 0 ) {
      const result = await query(`
        SELECT 
          hw_asset_contracts.*, 
          hardware_assets.*, 
          contracts.*, 
          'HW' AS asset_type
        FROM 
          hw_asset_contracts
        JOIN 
          hardware_assets ON hw_asset_contracts.hardware_asset_id = hardware_assets.hardware_asset_id
        JOIN 
          contracts ON hw_asset_contracts.contract_id = contracts.contract_id
        WHERE 
          hw_asset_contracts.hardware_asset_id = $1;
      `, [asset_id]);

      return result.rows;
      
    } else {
      return [{ error: error }];
    }
    


    
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsPostAdd = async (data) => {
  let {
    contract_id,
    contract_no,
    contract_type_id,
    contractor_name,
    contract_sla,
    tenant_id,
    contract_valid_from,
    contract_valid_to,
    contract_description,
  } = data;

  let contract_valid_from_date = new Date(contract_valid_from);
  let contract_valid_to_date = new Date(contract_valid_to);

  try {
    const result = await query(
      `
      INSERT INTO 
        contracts (
          contract_id, 
          tenant_id, 
          contract_type_id, 
          contractor_name, 
          contract_sla, 
          contract_no, 
          contract_description,
          contract_valid_from,
          contract_valid_to,
          contract_changed_at,
          contract_created_at
        ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
      [
        contract_id,
        tenant_id,
        contract_type_id,
        contractor_name,
        contract_sla,
        contract_no,
        contract_description,
        contract_valid_from_date,
        contract_valid_to_date,
      ]
    );

    return result;
  } catch (error) {
    console.log(error);
    return [{ error: error }];
  }
};

module.exports.contractsPostAddAsset = async (identity, newContractId, asset_id, asset_type) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;
    console.log(newContractId);
    console.log(asset_id);
    console.log(asset_type);
    if (asset_type == "HW") {
      if (tenant_root == true && mock_tenant_id == undefined) {
        const result = await query(
          `
          INSERT INTO  
          hw_asset_contracts (
            hw_asset_contract_id,
            hardware_asset_id,
            contract_id,
            hw_created_at
          )
          VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );

        console.log(result);
        return result.rows;
      } else if (tenant_root == true && mock_tenant_id) {
        const result = await query(
          `
          INSERT INTO  
          hw_asset_contracts (
            hw_asset_contract_id,
            hardware_asset_id,
            contract_id,
            hw_created_at
          )
          VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );
        return result.rows;
      } else {
        const result = await query(
          `
        INSERT INTO  
        hw_asset_contracts (
          hw_asset_contract_id,
          hardware_asset_id,
          contract_id,
          hw_created_at
        )
        VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );
        return result.rows;
      }
    } else if (asset_type == "SW") {
      if (tenant_root == true && mock_tenant_id == undefined) {
        const result = await query(
          `
          INSERT INTO  
          sw_asset_contracts (
            sw_asset_contract_id,
            software_asset_id,
            contract_id,
            sw_created_at
          )
          VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );

        return result.rows;
      } else if (tenant_root == true && mock_tenant_id) {
        const result = await query(
          `
          INSERT INTO  
          hw_asset_contracts (
            sw_asset_contract_id,
            software_asset_id,
            contract_id,
            sw_created_at
          )
          VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );
        return result.rows;
      } else {
        const result = await query(
          `
        INSERT INTO  
        sw_asset_contract_id,
        software_asset_id,
        contract_id,
        sw_created_at
        )
        VALUES (uuid_generate_v4(), $1, $2, CURRENT_TIMESTAMP);`,
          [asset_id, newContractId]
        );
        return result.rows;
      }
    }

  } catch (error) {
    return [{ error: error }];
  }
};


module.exports.contractsPostRemoveAsset = async (identity, newContractId, asset_id, asset_type) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;
    if (asset_type == "HW") {
      if (tenant_root == true && mock_tenant_id == undefined) {
        const result = await query(
          `
          DELETE FROM  
            hw_asset_contracts
          WHERE
            hardware_asset_id = $1
          AND
            contract_id = $2;
          `,
          [asset_id, newContractId]
        );
        return result.rows;
      } else if (tenant_root == true && mock_tenant_id) {
        const result = await query(
          `
          DELETE FROM  
            hw_asset_contracts
          WHERE
            hardware_asset_id = $1
          AND
            contract_id = $2;
          `,
          [newContractId, asset_id]
        );
        return result.rows;
      } else {
        const result = await query(
            `
            DELETE FROM  
              hw_asset_contracts
            WHERE
              hardware_asset_id = $1
            AND
              contract_id = $2;
            `,
            [asset_id, newContractId]
          );
        return result.rows;
      }
    } else if (asset_type == "SW") {
      if (tenant_root == true && mock_tenant_id == undefined) {
        const result = await query(
          `
          DELETE FROM  
            sw_asset_contracts
          WHERE
            software_asset_id = $1
          AND
            contract_id = $2;
          `,
          [asset_id, newContractId]
        );
      return result.rows;
      } else if (tenant_root == true && mock_tenant_id) {
        const result = await query(
          `
          DELETE FROM  
            sw_asset_contracts
          WHERE
            software_asset_id = $1
          AND
            contract_id = $2;
          `,
          [asset_id, newContractId]
        );
      return result.rows;
      } else {
        const result = await query(
          `
          DELETE FROM  
            sw_asset_contracts
          WHERE
            software_asset_id = $1
          AND
            contract_id = $2;
          `,
          [asset_id, newContractId]
        );
      return result.rows;
      }
    }

  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.contractsPostRemoveContract = async (
  identity,
  contract_id
) => {

  console.log(`contract_id in serv is: ${contract_id}`)

  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;
    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query(
        `
        DELETE
        FROM contracts
        WHERE contract_id = $1;
      `,
        [contract_id]
      );
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        DELETE
        FROM contracts
        WHERE contract_id = $1;
      `,
        [contract_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        DELETE
        FROM contracts
        WHERE contract_id = $1;
      `,
        [contract_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};