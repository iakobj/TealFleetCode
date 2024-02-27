const { query } = require("./db/index");

module.exports.assetsGetAllHW = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
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
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT *
        FROM hardware_assets
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN tenants ON hardware_assets.tenant_id = tenants.tenant_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        JOIN sites ON hardware_assets.site_id = sites.site_id
        WHERE hardware_assets.tenant_id = $1;
        `,
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT *
        FROM hardware_assets
        JOIN hardware_catalog ON hardware_assets.hardware_catalog_id = hardware_catalog.hardware_catalog_id
        JOIN tenants ON hardware_assets.tenant_id = tenants.tenant_id
        JOIN vendors ON hardware_catalog.vendor_id = vendors.vendor_id
        JOIN sites ON hardware_assets.site_id = sites.site_id
        WHERE hardware_assets.tenant_id = $1;
        `,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.assetsGetAllSW = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
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
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        `
        SELECT *
        FROM software_assets
        JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
        JOIN tenants ON software_assets.tenant_id = tenants.tenant_id
        JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
        JOIN sites ON software_assets.site_id = sites.site_id
        WHERE software_assets.tenant_id = $1;
        `,
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(
        `
        SELECT *
        FROM software_assets
        JOIN software_catalog ON software_assets.software_catalog_id = software_catalog.software_catalog_id
        JOIN tenants ON software_assets.tenant_id = tenants.tenant_id
        JOIN vendors ON software_catalog.vendor_id = vendors.vendor_id
        JOIN sites ON software_assets.site_id = sites.site_id
        WHERE software_assets.tenant_id = $1;
        `,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.assetsGetNoHW = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query("SELECT COUNT(*) FROM hardware_assets;");
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        "SELECT COUNT(*) FROM hardware_assets WHERE tenant_id = $1;",
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT COUNT(*) FROM hardware_assets WHERE tenant_id = $1;",
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.assetsGetNoSW = async (identity) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;

    if (tenant_root == true && mock_tenant_id == undefined) {
      const result = await query("SELECT COUNT(*) FROM software_assets;");
      return result.rows;
    } else if (tenant_root == true && mock_tenant_id) {
      const result = await query(
        "SELECT COUNT(*) FROM software_assets WHERE tenant_id = $1;",
        [mock_tenant_id]
      );
      return result.rows;
    } else {
      const result = await query(
        "SELECT COUNT(*) FROM software_assets WHERE tenant_id = $1;",
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};

module.exports.assetsGetFleet = async (identity, searchParams) => {
  try {
    const { tenant_id, tenant_root, mock_tenant_id } = await identity.data;
    console.log(searchParams);
    let queryText = `
    SELECT
      hw.hardware_asset_id, 
      hw.hardware_catalog_id, 
      hw.hardware_asset_name, 
      hw.tenant_id AS hardware_tenant_id,
      hw.site_id AS hardware_site_id,
      hw.hardware_serial_no, 

      sw.software_asset_id, 
      sw.software_catalog_id, 
      sw.software_asset_name,
      sw.hardware_asset_id AS sw_hardware_asset_id,
      sw.tenant_id AS software_tenant_id,
      sw.site_id AS software_site_id,

      swc.software_catalog_id,
      swc.vendor_id AS software_vendor_id,
      swc.sw_category_id,
      swc.software_model_name,
      swc.software_version_number,
      swc.software_image,
      swc.software_release_date,
      swc.software_end_of_life,
      swc.software_end_of_support,

      hwc.hardware_catalog_id,
      hwc.vendor_id AS hardware_vendor_id,
      hwc.hw_category_id,
      hwc.hardware_model_name,
      hwc.hardware_part_number,
      hwc.hardware_image,
      hwc.hardware_release_date,
      hwc.hardware_end_of_life,
      hwc.hardware_end_of_support,

      vendors.vendor_id,
      vendors.vendor_name,
      vendors.vendor_image,

      tenants.tenant_id,
      tenants.is_root,
      tenants.tenant_name,

      sites.site_id,
      sites.site_name
    
    FROM  
      hardware_assets hw
    FULL JOIN 
      software_assets sw ON hw.hardware_asset_id = sw.hardware_asset_id
    LEFT JOIN
      software_catalog swc ON sw.software_catalog_id = swc.software_catalog_id
    LEFT JOIN
      hardware_catalog hwc ON hw.hardware_catalog_id = hwc.hardware_catalog_id
    LEFT JOIN
      vendors ON vendors.vendor_id = hwc.vendor_id OR vendors.vendor_id = swc.vendor_id
    LEFT JOIN
      tenants ON tenants.tenant_id = hw.tenant_id OR tenants.tenant_id = sw.tenant_id
    LEFT JOIN
      sites ON sites.site_id = hw.site_id OR sites.site_id = sw.site_id
    WHERE 
    1 = 1 `;


    const queryParams = []; // Array to hold query parameters

    // Add conditions based on search parameters
    if (searchParams.searchTenant !== false) {
      queryText += ` AND tenants.tenant_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchTenant);
    }
    if (searchParams.searchSwmodel !== false) {
      queryText += ` AND swc.software_model_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchSwmodel);
    }
    if (searchParams.searchHwmodel !== false) {
      queryText += ` AND hwc.hardware_model_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchHwmodel);
    }
    if (searchParams.searchSitename !== false) {
      queryText += ` AND sites.site_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchSitename);
    }
    if (searchParams.searchVendor !== false) {
      queryText += ` AND vendors.vendor_name = $${queryParams.length + 1}`;
      queryParams.push(searchParams.searchVendor);
    }

    if (tenant_root == true && mock_tenant_id == undefined) {
      console.log(queryText, queryParams);
      const result = await query(queryText, queryParams);
      return result.rows;

    } else {
      const result = await query(
        `
      SELECT
        hw.hardware_asset_id, 
        hw.hardware_catalog_id, 
        hw.hardware_asset_name, 
        hw.tenant_id AS hardware_tenant_id,
        hw.site_id AS hardware_site_id,
        hw.hardware_serial_no, 
        
        sw.software_asset_id, 
        sw.software_catalog_id, 
        sw.software_asset_name,
        sw.hardware_asset_id AS sw_hardware_asset_id,
        sw.tenant_id AS software_tenant_id,
        sw.site_id AS software_site_id,
        
        swc.software_catalog_id,
        swc.vendor_id AS software_vendor_id,
        swc.sw_category_id,
        swc.software_model_name,
        swc.software_version_number,
        swc.software_image,
        swc.software_release_date,
        swc.software_end_of_life,
        swc.software_end_of_support,
        
        hwc.hardware_catalog_id,
        hwc.vendor_id AS hardware_vendor_id,
        hwc.hw_category_id,
        hwc.hardware_model_name,
        hwc.hardware_part_number,
        hwc.hardware_image,
        hwc.hardware_release_date,
        hwc.hardware_end_of_life,
        hwc.hardware_end_of_support,
        
        vendors.vendor_id,
        vendors.vendor_name,
        vendors.vendor_image,
        
        tenants.tenant_id,
        tenants.is_root,
        tenants.tenant_name
      
      FROM  
        hardware_assets hw
      FULL JOIN 
        software_assets sw ON hw.hardware_asset_id = sw.hardware_asset_id
      LEFT JOIN
        software_catalog swc ON sw.software_catalog_id = swc.software_catalog_id
      LEFT JOIN
        hardware_catalog hwc ON hw.hardware_catalog_id = hwc.hardware_catalog_id
      LEFT JOIN
        vendors ON vendors.vendor_id = hwc.vendor_id OR vendors.vendor_id = swc.vendor_id
      LEFT JOIN
        tenants ON tenants.tenant_id = hw.tenant_id OR tenants.tenant_id = sw.tenant_id
      WHERE
        tenants.tenant_id = $1;
  `,
        [tenant_id]
      );
      return result.rows;
    }
  } catch (error) {
    return [{ error: error }];
  }
};
