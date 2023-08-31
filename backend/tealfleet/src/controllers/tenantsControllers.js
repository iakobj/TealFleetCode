const {
    tenantsGetAll, 
    tenantsGetById
} = require('../services/tenantsServices');

// Get all tenants
module.exports.cTenantsGetAll = (req, res) => {
    const all = tenantsGetAll();
    res.send(all);
}

// Get tenant by ID
module.exports.cTenantsGetById = (req, res) => {
    const id = req.params.id
    const tenant = tenantsGetById(id);
    res.send(tenant);
  }
 
