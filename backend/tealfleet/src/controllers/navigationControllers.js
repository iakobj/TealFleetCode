const {
    navigationGetAllMain,
    navigationGetByIdMain,
    navigationGetAllSub,
    navigationGetByIdSub,
  } = require("../services/navigationServices");
  
  // Get all navigation items
  module.exports.cNavigationGetAll = async (req, res) => {
    try {
      const result1 = await navigationGetAllMain();
      const result2 = await navigationGetAllSub();
      result1.rows.push(result2.rows);
      res.status(200).send(result1.rows);
    } catch (err) {
      console.log(err);
      res.status(404).send("No navigation found");
    }
  };
  
  // Get navigation item by id
  module.exports.cNavigationGetById = async (req, res) => {
    const id = req.params.id;
    try {
      const result1 = await navigationGetByIdMain(id);
      const result2 = await navigationGetByIdSub(id);
      result1.rows.push(result2.rows);
      console.log(result1.rows);
      res.status(200).send(result1.rows);
    } catch (err) {
      console.log(err);
      res
        .status(404)
        .send(
          `The navigation item was not found, invalid input syntax for type uuid ${id}`
        );
    }
  };
  