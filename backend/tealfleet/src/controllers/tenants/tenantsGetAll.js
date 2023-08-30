const {tenantsGetAll} = require('../../services/tenants');

module.exports  = (req, res) => {
    const all = tenantsGetAll();
    res.send(all);
  }

 