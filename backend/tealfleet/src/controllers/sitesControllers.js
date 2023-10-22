const {
    sitesGetAll,
    sitesGetById,
    sitesGetByName,
  } = require("../services/sitesServices");
  
  // Get all sites
  module.exports.cSitesGetAll = async (req, res) => {
    try {
      const result = await sitesGetAll();
      res.status(200).send(result);
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
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res
        .status(404)
        .send(
          `The site was not found, invalid input syntax for type uuid ${id}`
        );
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
        res.status(200).send(result);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("500 Internal Server Error");
    }
  };
  