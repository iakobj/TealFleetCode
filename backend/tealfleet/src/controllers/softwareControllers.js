const {
  SoftwareCatGetAll,
  SoftwareCatGetById,
  SoftwareCatGetByName,
  SoftwareCatGetByVendor,
  SoftwareCatGetByVersion,
  SoftwareAssGetAll,
  SoftwareAssGetById,
  SoftwareAssGetByName,
  SoftwareAssGetByVendor,
  SoftwareAssGetByVersion,
  SoftwareAssGetByTenant,
  SoftwareAssGetBySite,
} = require("../services/softwareServices");

// Software Asset Controllers

// Get all software from catalog
module.exports.cSoftwareCatGetAll = async (req, res) => {
  try {
    const result = await SoftwareCatGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No software found");
  }
};

// Get software from catalog by id
module.exports.cSoftwareCatGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await SoftwareCatGetById(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The software was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get software from cataloge by name
module.exports.cSoftwareCatGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await SoftwareCatGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software from cataloge by vendor
module.exports.cSoftwareCatGetByVendor = async (req, res) => {
  const vendor = req.params.vendor;
  try {
    const result = await SoftwareCatGetByVendor(vendor);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type vendor ${vendor}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software from cataloge by vendor
module.exports.cSoftwareCatGetByVersion = async (req, res) => {
  const version = req.params.version;
  try {
    const result = await SoftwareCatGetByVersion(version);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type version ${version}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Software Assets Controllers

// Get all software from assets
module.exports.cSoftwareAssGetAll = async (req, res) => {
  try {
    const result = await SoftwareAssGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No software found");
  }
};

// Get software from assets by id
module.exports.cSoftwareAssGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await SoftwareAssGetById(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The software was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get software from assets by name
module.exports.cSoftwareAssGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await SoftwareAssGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software infromation from assets by vendor
module.exports.cSoftwareAssGetByVendor = async (req, res) => {
  const vendor = req.params.vendor;
  try {
    const result = await SoftwareAssGetByVendor(vendor);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type vendor ${vendor}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software version from assets by vendor
module.exports.cSoftwareAssGetByVersion = async (req, res) => {
  const version = req.params.version;
  try {
    const result = await SoftwareAssGetByVersion(version);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type version ${version}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software from assets by tenant
module.exports.cSoftwareAssGetByTenant = async (req, res) => {
  const tenant = req.params.tenant;
  try {
    const result = await SoftwareAssGetByTenant(tenant);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type tenant ${tenant}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get software from assets by site
module.exports.cSoftwareAssGetBySite = async (req, res) => {
  const site = req.params.site;
  try {
    const result = await SoftwareAssGetBySite(site);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The software was not found, invalid input syntax for type site ${site}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
