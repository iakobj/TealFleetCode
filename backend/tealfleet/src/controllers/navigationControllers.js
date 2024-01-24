const {
  navigationMainGetAll,
  navigationMainGetById,
  navigationSubGetAll,
  navigationSubGetById,
  navigationSubGetByName,
} = require("../services/navigationServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cNavigationMainGetAll = async (req, res) => {
  try {
    //const identity = await checkIdentity(req);  
    // commented out otherwise the navigation does not appear on login, 
    //you have to refresh the website to fetch the data agin with credentials

    // This is because the fetch is run on load and not just when the main header is rendered 


    const result = await navigationMainGetAll();

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cNavigationMainGetById = async (req, res) => {
  const main_nav_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await navigationMainGetById(identity, main_nav_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cNavigationSubGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await navigationSubGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cNavigationSubGetById = async (req, res) => {
  const main_nav_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await navigationSubGetById(identity, main_nav_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cNavigationSubGetByName = async (req, res) => {
  const main_nav_item = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await navigationSubGetByName(identity, main_nav_item);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};
