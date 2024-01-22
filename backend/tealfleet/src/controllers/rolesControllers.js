const {
  rolesGetAll,
  rolesGetById,
  rolesGetByRole,
  rolesGetByName,
} = require("../services/rolesServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cRolesGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await rolesGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cRolesGetById = async (req, res) => {
  const role_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await rolesGetById(identity, role_id);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cRolesGetByRole = async (req, res) => {
  const role_type = req.params.type;
  try {
    const identity = await checkIdentity(req);
    const result = await rolesGetByRole(identity, role_type);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cRolesGetByName = async (req, res) => {
  const role_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await rolesGetByName(identity, role_name);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};
