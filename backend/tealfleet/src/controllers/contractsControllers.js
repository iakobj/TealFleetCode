const {
  contractsGetAll,
  contractsGetByTenant,
  hwContractsGetAll,
  swContractsGetAll,
  swContractsGetByContractId,
  hwContractsGetByContractId,
} = require("../services/contractsServices");

// Get (almost) all contract information
module.exports.cContractsGetAll = async (req, res) => {
  try {
    const result = await contractsGetAll();

    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split('T')[0];
      const validToDateString = validTo.toISOString().split('T')[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
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

// Get (almost) all asset contract information from Contract Id
module.exports.cContractsGetByContractId = async (req, res) => {
  const id = req.params.id;
  try {
    const sw_result = await swContractsGetByContractId(id);
    const hw_result = await hwContractsGetByContractId(id);


    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};