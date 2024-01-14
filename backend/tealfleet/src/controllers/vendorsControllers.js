const {
  vendorsGetAll,
  vendorsGetById,
  vendorsGetByName,
} = require("../services/vendorsServices");

module.exports.cVendorsGetAll = async (req, res) => {
  try {
    const result = await vendorsGetAll(req);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Vendors not found");
  }
};

module.exports.cVendorsGetById = async (req, res) => {
  const vendor_id = req.params.id;
  try {
    const result = await vendorsGetById(req, vendor_id);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Vendor not found");
  }
};

module.exports.cVendorsGetByName = async (req, res) => {
  const vendor_name = req.params.name;
  try {
    const result = await vendorsGetByName(req, vendor_name);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Vendor not found");
  }
};
