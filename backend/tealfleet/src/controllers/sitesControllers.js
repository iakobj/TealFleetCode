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

// Get all sites
module.exports.cSitesGetAll = async (req, res) => {
  try {
    const result = await sitesGetAll();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No sites found");
  }
};

// Get site by id
module.exports.cSitesGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await sitesGetById(id);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(`The site was not found, invalid input syntax for type uuid ${id}`);
  }
};

// Get site by name
module.exports.cSitesGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await sitesGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get site by address
module.exports.cSitesGetByAddress = async (req, res) => {
  const address = req.params.address;
  try {
    const result = await sitesGetByAddress(address);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type address ${address}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get site by city
module.exports.cSitesGetByCity = async (req, res) => {
  const city = req.params.city;
  try {
    const result = await sitesGetByCity(city);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type city ${city}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get site by post code
module.exports.cSitesGetByPostcode = async (req, res) => {
  const postcode = req.params.postcode;
  try {
    const result = await sitesGetByPostcode(postcode);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type post code ${postcode}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get site by country
module.exports.cSitesGetByCountry = async (req, res) => {
  const country = req.params.country;
  try {
    const result = await sitesGetByCountry(country);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type country ${country}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get site by tenant
module.exports.cSitesGetByTenant = async (req, res) => {
  const tenant = req.params.tenant;
  try {
    const result = await sitesGetByTenant(tenant);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type tenant ${tenant}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
