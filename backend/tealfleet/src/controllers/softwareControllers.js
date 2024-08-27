const {
  softwareCatGetAll,
  softwareCatGetById,
  softwareCatGetByName,
  softwareCatGetByVendor,
  softwareCatGetByVersion,
  softwareCatGetByCategory,
  softwareCatGetSWModelName,
  softwareCatGetSWModelNameByVendor,

  softwareAssGetAll,
  softwareAssGetById,
  softwareAssGetByName,
  softwareAssGetByVendor,
  softwareAssGetByVersion,
  softwareAssGetByTenant,
  softwareAssGetBySite,
} = require("../services/softwareServices");

const { checkIdentity } = require("../middlewares/identity");

// Software Catalog Controllers

module.exports.cSoftwareCatGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetById = async (req, res) => {
  const software_catalog_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetById(identity, software_catalog_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetByName = async (req, res) => {
  const software_model_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetByName(identity, software_model_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetByVersion = async (req, res) => {
  const software_version_number = req.params.version;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetByVersion(identity, software_version_number);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetByCategory = async (req, res) => {
  const sw_category = req.params.category;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetByCategory(identity, sw_category);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetSWModelName = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetSWModelName(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareCatGetSWModelNameByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareCatGetSWModelNameByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

// Software Assets Controllers

module.exports.cSoftwareAssGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetById = async (req, res) => {
  const software_asset_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetById(identity, software_asset_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetByName = async (req, res) => {
  const software_model_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetByName(identity, software_model_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetByVersion = async (req, res) => {
  const software_version_number = req.params.version;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetByVersion(identity, software_version_number);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetByTenant = async (req, res) => {
  const tenant_name = req.params.tenant;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetByTenant(identity, tenant_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cSoftwareAssGetBySite = async (req, res) => {
  const site_name = req.params.site;
  try {
    const identity = await checkIdentity(req);
    const result = await softwareAssGetBySite(identity, site_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};
