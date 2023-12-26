const {
  navigationMainGetAll,
  navigationMainGetById,
  navigationSubGetAll,
  navigationSubGetById,
  navigationSubGetByName,
} = require("../services/navigationServices");

// Get all navigation items
module.exports.cNavigationGetAll = async (req, res) => {
  try {
    const mainNavData = await navigationMainGetAll();
    const subNavData = await navigationSubGetAll();

    const sortedData = [];

    // Iterate through mainNavData
    mainNavData.forEach((mainNavItem) => {
      const mainNavId = mainNavItem.main_nav_id;

      // Find related subNavItems for the current mainNavItem
      const relatedSubNavItems = subNavData.filter(
        (subNavItem) => subNavItem.main_nav_id === mainNavId
      );

      // Add mainNavItem to the sortedData
      sortedData.push(mainNavItem);

      // Add related subNavItems to the sortedData
      sortedData.push(...relatedSubNavItems);
    });

    res.status(200).send({ data: sortedData });
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all main navigation items
module.exports.cNavigationMainGetAll = async (req, res) => {
  try {
    const result = await navigationMainGetAll();
    console.log(req.sessionID, req.session.user);
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get main navigation item by id
module.exports.cNavigationMainGetById = async (req, res) => {
  try {
    const result = await navigationMainGetById(id);
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all sub navigation items
module.exports.cNavigationSubGetAll = async (req, res) => {
  try {
    const result = await navigationSubGetAll();
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};

// Get all sub navigation items with maching main nav items id
module.exports.cNavigationSubGetById = async (req, res) => {
  try {
    const result = await navigationSubGetById(id);
    res.status(200).send({ data: result });
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
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No navigation found");
  }
};
