const {
  vendorsGetAll,
  vendorsGetById,
  vendorsGetByName,
} = require("../services/vendorsServices");

// Get all vendors
module.exports.cVendorsGetAll = async (req, res) => {
  try {
    const result = await vendorsGetAll();
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(404).send("No vendors found");
  }
};

// Get vendor by id
module.exports.cVendorsGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await vendorsGetById(id);
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `The vendor was not found, invalid input syntax for type uuid ${id}`
      );
  }
};

// Get vendor by name
module.exports.cVendorsGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await vendorsGetByName(name);
    if (result.rows.length === 0) {
      res
        .status(404)
        .send(
          `The vendor was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
