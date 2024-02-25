const {
  assetsGetAllHW,
  assetsGetAllSW,
  assetsGetfleet,
} = require("../services/assetsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetfleet(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetAllHW = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetAllHW(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetAllSW = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetAllSW(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetfleet = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetfleet(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};