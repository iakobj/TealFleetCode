const {
  contractsGetAll,
  contractsGetByTenant,
  hwContractsGetAll,
  swContractsGetAll,
} = require("../services/contractsServices");

// Get (almost) all contract information
module.exports.cContractsGetAll = async (req, res) => {
  try {
    const result = await contractsGetAll();

    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid: isValid ? "TRUE" : "FALSE",
      };
    });

    res.status(200).send({ data: updatedContracts });
  } catch (err) {
    console.log(err);
    res.status(404).send("No contracts found");
  }
};

// Get (almost) all contract information by tenant
module.exports.cContractsGetByTenant = async (req, res) => {
  const tenant = req.params.tenant;
  try {
    const result = await contractsGetByTenant(tenant);
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No contracts found");
  }
};

// Get (almost) all hardware asset contract information
module.exports.cHwContractsGetAll = async (req, res) => {
  try {
    const result = await hwContractsGetAll();
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// Get (almost) all software asset contract information
module.exports.cSwContractsGetAll = async (req, res) => {
  try {
    const result = await swContractsGetAll();
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};
