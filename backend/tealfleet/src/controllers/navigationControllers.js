const {
  navigationMainGetAll,
  navigationMainGetById,
  navigationSubGetAll,
  navigationSubGetById,
} = require("../services/navigationServices");

// Get all navigation items
module.exports.cNavigationGetAll = async (req, res) => {
  try {
    const result1 = await navigationMainGetAll();
    const result2 = await navigationSubGetAll();
    result1.push(result2);
    res.status(200).send(result1);
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all main navigation items
module.exports.cNavigationMainGetAll = async (req, res) => {
  try {
    const result = await navigationMainGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get navigation item by id
module.exports.cNavigationGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result1 = await navigationMainGetById(id);
    const result2 = await navigationSubGetById(id);
    result1.push(result2);
    res.status(200).send(result1);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The navigation item was not found, invalid input syntax for type uuid ${id}`
      );
  }
};
