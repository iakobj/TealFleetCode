const {
  tenantsGetAll,
  tenantsGetById,
  tenantsGetByName,
} = require("../services/tenantsServices");

module.exports.cTenantsGetAll = async (req, res) => {
  try {
    const result = await tenantsGetAll(req);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Tenants not found");
  }
};

module.exports.cTenantsGetById = async (req, res) => {
  const ten_id = req.params.id;
  try {
    const result = await tenantsGetById(req, ten_id);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Tenant not found");
  }
};

module.exports.cTenantsGetByName = async (req, res) => {
  const tenant_name = req.params.name;
  try {
    const result = await tenantsGetByName(req, tenant_name);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Tenant not found");
  }
};