const {
  tenantsGetAll,
  tenantsGetById,
} = require("../services/tenantsServices");

// Get all tenants
module.exports.cTenantsGetAll = async (req, res) => {
  const all = await tenantsGetAll();
  res.send(all.rows);
};

// Get tenant by ID
module.exports.cTenantsGetById = async (req, res) => {
  const id = req.params.id;
  const tenant = await tenantsGetById(id);
  res.send(tenant.rows);
};
