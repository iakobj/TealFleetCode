const {
  vendorsGetAll,
  vendorsGetById,
  vendorsGetByName,
} = require("../services/vendorsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cVendorsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await vendorsGetAll(identity);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cVendorsGetById = async (req, res) => {
  const vendor_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await vendorsGetById(identity, vendor_id);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cVendorsGetByName = async (req, res) => {
  const vendor_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await vendorsGetByName(identity, vendor_name);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({data: [{error}]});
  }
};
