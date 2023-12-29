const {
  navigationMainGetAll,
  navigationMainGetById,
  navigationSubGetAll,
  navigationSubGetById,
  navigationSubGetByName,
} = require("../services/navigationServices");

// Get navigation item by id
module.exports.cNavigationGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result1 = await navigationMainGetById(id);
    const result2 = await navigationSubGetById(id);
    result1.push(result2);
    res.status(200).send({"data": result1});
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The navigation item was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get all main navigation items
module.exports.cNavigationMainGetAll = async (req, res) => {
  try {
    const result = await navigationMainGetAll();
    console.log(req.sessionID, req.session.user);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get  main navigation item by id
module.exports.cNavigationMainGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await navigationMainGetById(id);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all sub navigation items
module.exports.cNavigationSubGetAll = async (req, res) => {
  try {
    const result = await navigationSubGetAll();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all sub navigation items with maching main nav items id
module.exports.cNavigationSubGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await navigationSubGetById(id);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all sub navigation items with maching main nav items id
module.exports.cNavigationSubGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await navigationSubGetByName(name);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};
