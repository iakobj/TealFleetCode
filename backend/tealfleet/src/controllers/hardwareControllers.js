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

  hardwareAddPostAsset,
  hardwareAddPostAssetComponent,
} = require("../services/hardwareServices");

const { checkIdentity } = require("../middlewares/identity");

const Joi = require("joi");
const { v4: uuidv4 } = require('uuid');

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


module.exports.cHardwareAddPostAsset = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    let {
      hardware_catalog_id,
      hardware_asset_name,
      hardware_asset_ip,
      hardware_serial_no,
      hardware_asset_tag,
      tenant_id,
      site_id,
      hardware_notes,
    } = req.body;

    const hardware_asset_id = uuidv4();

    const data = {
      hardware_asset_id: hardware_asset_id,
      hardware_catalog_id: hardware_catalog_id,
      hardware_asset_name: hardware_asset_name,
      hardware_asset_ip: hardware_asset_ip,
      hardware_serial_no: hardware_serial_no,
      hardware_asset_tag: hardware_asset_tag,
      tenant_id: tenant_id,
      site_id: site_id,
      hardware_notes: hardware_notes,
    };

    for (const key in data) {
      if (data[key] == "") {
        data[key] = undefined;
      }
    }

    const schema = Joi.object({
      hardware_asset_id: Joi.string().guid({ version: "uuidv4" }).required(),
      hardware_catalog_id: Joi.string().guid().required(),
      hardware_asset_name: Joi.string().optional(),
      hardware_asset_ip: Joi.string().optional(),
      hardware_serial_no: Joi.string().optional(),
      hardware_asset_tag: Joi.string().optional(),
      tenant_id: Joi.string().guid().required(),
      site_id: Joi.string().guid().optional(),
      hardware_notes: Joi.string().optional(),
    });

    const validation = await schema.validate(data);

    if (validation.error) {
      res.status(400).send({ error: validation.error.details[0].message });
      return;
    } else {
      const result = await hardwareAddPostAsset(data);
      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send({ hardware_asset_id });
        return;
      }
    }
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};


module.exports.cHardwareAddPostAssetComponent = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    let {
      hardware_asset_id,
      amount,
      hw_part_make,
      hw_part_model,
      hw_part_number,
      hw_serial_no,
      hw_asset_tag,
    } = req.body;

    const hw_sub_component_id = uuidv4();

    const data = {
      hw_sub_component_id: hw_sub_component_id,
      hardware_asset_id: hardware_asset_id,
      amount: amount,
      hw_part_make: hw_part_make,
      hw_part_model: hw_part_model,
      hw_part_number: hw_part_number,
      hw_serial_no: hw_serial_no,
      hw_asset_tag: hw_asset_tag,
    };

    for (const key in data) {
      if (data[key] == "") {
        data[key] = undefined;
      }
    }

    const schema = Joi.object({ 
      hw_sub_component_id: Joi.string().guid({ version: "uuidv4" }).required(),
      hardware_asset_id: Joi.string().guid().required(),
      amount: Joi.number().optional(),
      hw_part_make: Joi.string().optional(),
      hw_part_model: Joi.string().optional(),
      hw_part_number: Joi.string().optional(),
      hw_serial_no: Joi.string().optional(),
      hw_asset_tag: Joi.string().optional(),
    });

    const validation = await schema.validate(data);

    if (validation.error) {
      res.status(400).send({ error: validation.error.details[0].message });
      return;
    } else {
      const result = await hardwareAddPostAssetComponent(data);
      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send({ hw_sub_component_id });
        return;
      }
    }
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};