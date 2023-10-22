const {
  rolesGetAll,
  rolesGetById,
  rolesGetByRole,
  rolesGetByName,
} = require("../services/rolesServices");

// Get all roles
module.exports.cRolesGetAll = async (req, res) => {
  try {
    const result = await rolesGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No roles found");
  }
};

// Get role by id
module.exports.cRolesGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await rolesGetById(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(`The role was not found, invalid input syntax for type uuid ${id}`);
  }
};

// Get role by role
module.exports.cRolesGetByRole = async (req, res) => {
  const role = req.params.role;
  try {
    const result = await rolesGetByRole(role);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The role was not found, invalid input syntax for type role ${role}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get role by name
module.exports.cRolesGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await rolesGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The role was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
