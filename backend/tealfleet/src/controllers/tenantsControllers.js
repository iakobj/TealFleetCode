const {
  tenantsGetAll,
  tenantsGetById,
  tenantsGetByName,
} = require("../services/tenantsServices");

// Get all tenants
module.exports.cTenantsGetAll = async (req, res) => {
  try {
    const result = await tenantsGetAll();
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(404).send("No tenants found");
  }
};

// Get tenant by ID
module.exports.cTenantsGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await tenantsGetById(id);
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The tenant was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get tenant by name
module.exports.cTenantsGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await tenantsGetByName(name);
    if (result.rows.length === 0) {
      res
        .status(404)
        .send(
          `The tenant was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
