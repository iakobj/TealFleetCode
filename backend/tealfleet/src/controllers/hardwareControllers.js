const {
  hardwareCatGetAll,
  hardwareCatGetById,
  hardwareCatGetByName,
  hardwareCatGetByVendor,
  hardwareCatGetByPartnumber,
  hardwareCatGetByCategory,
  hardwareCatGetHWModelName,
  hardwareCatGetByHWModelName,
  HardwareCatGetHWModelNameByVendor,

  hardwareAssGetAll,
  hardwareAssGetById,
  hardwareAssGetByName,
  hardwareAssGetByVendor,
  hardwareAssGetByPartnumber,
  hardwareAssGetBySerialnumber,
  hardwareAssGetByTenant,
  hardwareAssGetBySite,
} = require("../services/hardwareServices");

const { checkIdentity } = require("../middlewares/identity");

// Hardware Asset Controllers

module.exports.cHardwareCatGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetById = async (req, res) => {
  const hardware_catalog_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetById(identity, hardware_catalog_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetByName = async (req, res) => {
  const hardware_model_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetByName(identity, hardware_model_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetByPartnumber = async (req, res) => {
  const hardware_part_number = req.params.partnumber;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetByPartnumber(identity, hardware_part_number);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetByCategory = async (req, res) => {
  const hw_category = req.params.category;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetByCategory(identity, hw_category);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetHWModelName = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetHWModelName(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetByHWModelName = async (req, res) => {
  const hardware_model_name = req.params.hardwaremodelname;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareCatGetByHWModelName(identity, hardware_model_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareCatGetHWModelNameByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await HardwareCatGetHWModelNameByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

// Hardware Assets Controllers

module.exports.cHardwareAssGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetById = async (req, res) => {
  const hardware_asset_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetById(identity, hardware_asset_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetByName = async (req, res) => {
  const hardware_model_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetByName(identity, hardware_model_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetByVendor = async (req, res) => {
  const vendor_name = req.params.vendor;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetByVendor(identity, vendor_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetByPartnumber = async (req, res) => {
  const hardware_part_number = req.params.partnumber;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetByPartnumber(identity, hardware_part_number);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetBySerialnumber = async (req, res) => {
  const hardware_serial_no = req.params.serialnumber;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetBySerialnumber(identity, hardware_serial_no);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetByTenant = async (req, res) => {
  const tenant_name = req.params.tenant;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetByTenant(identity, tenant_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cHardwareAssGetBySite = async (req, res) => {
  const site_name = req.params.site;
  try {
    const identity = await checkIdentity(req);
    const result = await hardwareAssGetBySite(identity, site_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};
