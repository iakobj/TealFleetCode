const {tenantsGetById} = require('../../services/tenants');

module.exports = (req, res) => {
    const id = req.params.id
    const tenant = tenantsGetById(id);
    res.send(tenant);
  }
