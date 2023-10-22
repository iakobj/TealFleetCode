const {
  hardwareCatGetAll,
  hardwareCatGetById,
  hardwareCatGetByName,
  hardwareCatGetByVendor,
  cHardwareCatGetByPartnumber,
  hardwareCatGetByCategory,
  hardwareAssGetAll,
  hardwareAssGetById,
  hardwareAssGetByName,
  hardwareAssGetByVendor,
  hardwareAssGetByVersion,
  hardwareAssGetByTenant,
  hardwareAssGetBySite,
} = require("../services/HardwareServices");

// Hardware Asset Controllers

// Get all Hardware from catalog
module.exports.cHardwareCatGetAll = async (req, res) => {
  try {
    const result = await hardwareCatGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No Hardware found");
  }
};

// Get Hardware from catalog by id
module.exports.cHardwareCatGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await hardwareCatGetById(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The Hardware was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get Hardware from cataloge by name
module.exports.cHardwareCatGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await hardwareCatGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware from cataloge by vendor
module.exports.cHardwareCatGetByVendor = async (req, res) => {
  const vendor = req.params.vendor;
  try {
    const result = await hardwareCatGetByVendor(vendor);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type vendor ${vendor}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware from cataloge by part number
module.exports.cHardwareCatGetByPartnumber = async (req, res) => {
  const partnumber = req.params.partnumber;
  try {
    const result = await hardwareCatGetByPartnumber(partnumber);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type part number ${partnumber}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware from cataloge by category
module.exports.cHardwareCatGetByCategory = async (req, res) => {
  const category = req.params.version;
  try {
    const result = await hardwareCatGetByCategory(category);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type category ${category}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Hardware Assets Controllers

// Get all Hardware from assets
module.exports.cHardwareAssGetAll = async (req, res) => {
  try {
    const result = await hardwareAssGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No Hardware found");
  }
};

// Get Hardware from assets by id
module.exports.cHardwareAssGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await hardwareAssGetById(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The Hardware was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get Hardware from assets by name
module.exports.cHardwareAssGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await hardwareAssGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware infromation from assets by vendor
module.exports.cHardwareAssGetByVendor = async (req, res) => {
  const vendor = req.params.vendor;
  try {
    const result = await hardwareAssGetByVendor(vendor);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type vendor ${vendor}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware version from assets by version
module.exports.cHardwareAssGetByVersion = async (req, res) => {
  const version = req.params.version;
  try {
    const result = await hardwareAssGetByVersion(version);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type version ${version}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware from assets by tenant
module.exports.cHardwareAssGetByTenant = async (req, res) => {
  const tenant = req.params.tenant;
  try {
    const result = await hardwareAssGetByTenant(tenant);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type tenant ${tenant}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get Hardware from assets by site
module.exports.cHardwareAssGetBySite = async (req, res) => {
  const site = req.params.site;
  try {
    const result = await hardwareAssGetBySite(site);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The Hardware was not found, invalid input syntax for type site ${site}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
