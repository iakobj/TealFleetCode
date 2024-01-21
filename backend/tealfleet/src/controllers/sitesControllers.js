const {
  sitesGetAll,
  sitesGetById,
  sitesGetByName,
  sitesGetByAddress,
  sitesGetByCity,
  sitesGetByPostcode,
  sitesGetByCountry,
  sitesGetByTenant,
} = require("../services/sitesServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cSitesGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetById = async (req, res) => {
  const site_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetById(identity, site_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByName = async (req, res) => {
  const site_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByName(identity, site_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByAddress = async (req, res) => {
  const site_address = req.params.address;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByAddress(identity, site_address);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByCity = async (req, res) => {
  const site_city = req.params.city;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByCity(identity, site_city);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByPostcode = async (req, res) => {
  const site_postcode = req.params.postcode;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByPostcode(identity, site_postcode);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByCountry = async (req, res) => {
  const site_country = req.params.country;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByCountry(identity, site_country);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSitesGetByTenant = async (req, res) => {
  const ten_id = req.params.tenant;
  try {
    const identity = await checkIdentity(req);
    const result = await sitesGetByTenant(identity, ten_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};
