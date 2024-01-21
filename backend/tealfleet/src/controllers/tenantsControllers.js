const {
  tenantsGetAll,
  tenantsGetById,
  tenantsGetByName,
} = require("../services/tenantsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cTenantsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await tenantsGetAll(identity);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cTenantsGetById = async (req, res) => {
  const ten_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await tenantsGetById(identity, ten_id);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cTenantsGetByName = async (req, res) => {
  const tenant_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await tenantsGetByName(identity, tenant_name);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};
