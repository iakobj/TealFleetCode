const {
    navigationGetAll,
    navigationGetById,
    navigationGetByName,
  } = require("../services/navigationServices");
  
  // Get all navigation items
  module.exports.cNavigationGetAll = async (req, res) => {
    try {
      const result = await navigationGetAll();
      res.status(200).send(result.rows);
    } catch (err) {
      console.log(err);
      res.status(404).send("No navigation found");
    }
  };
  
  // Get navigation item by id
  module.exports.cNavigationGetById = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await navigationGetById(id);
      res.status(200).send(result.rows);
    } catch (err) {
      console.log(err);
      res
        .status(404)
        .send(
          `The navigation item was not found, invalid input syntax for type uuid ${id}`
        );
    }
  };
  
  // Get navigation item by name
  module.exports.cNavigationGetByName = async (req, res) => {
    const name = req.params.name;
    try {
      const result = await navigationGetByName(name);
      if (result.rows.length === 0) {
        res
          .status(404)
          .send(
            `The navigation item was not found, invalid input syntax for type name ${name}`
          );
      } else {
        res.status(200).send(result.rows);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("500 Internal Server Error");
    }
  };
  