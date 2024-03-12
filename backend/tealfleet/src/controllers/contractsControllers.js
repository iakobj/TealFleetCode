const {
  contractsGetAll,
  contractsGetAllNo,
  contractsGetByTenant,
  supportGetContracts,

  hwContractsGetAll,
  hwContractsGetByContractNo,
  hwContractsGetNo,
  swContractsGetAll,
  swContractsGetByContractNo,
  swContractsGetNo,
} = require("../services/contractsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cContractsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await contractsGetAll(identity);

    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split("T")[0];
      const validToDateString = validTo.toISOString().split("T")[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
      };
    });

    if (result[0] && result[0].error) {
      res.status(401).send({ data: updatedContracts });
    } else {
      res.status(200).send({ data: updatedContracts });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cContractsGetAllNo = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await contractsGetAllNo(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cContractsGetByTenant = async (req, res) => {
  const ten_id = req.params.tenant;
  try {
    const identity = await checkIdentity(req);
    const result = await contractsGetByTenant(identity, ten_id);

    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split("T")[0];
      const validToDateString = validTo.toISOString().split("T")[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
      };
    });

    if (result[0] && result[0].error) {
      res.status(401).send({ data: updatedContracts });
    } else {
      res.status(200).send({ data: updatedContracts });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cHwContractsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await hwContractsGetAll(identity);
    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split("T")[0];
      const validToDateString = validTo.toISOString().split("T")[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
      };
    });

    if (updatedContracts[0] && updatedContracts[0].error) {
      res.status(401).send({ data: updatedContracts });
    } else {
      res.status(200).send({ data: updatedContracts });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSwContractsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await swContractsGetAll(identity);
    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split("T")[0];
      const validToDateString = validTo.toISOString().split("T")[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
      };
    });

    if (result[0] && result[0].error) {
      res.status(401).send({ data: updatedContracts });
    } else {
      res.status(200).send({ data: updatedContracts });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cContractsGetByContractNo = async (req, res) => {
  const contract_no = req.params.contract_no;
  try {
    const identity = await checkIdentity(req);

    const result_sw = await swContractsGetByContractNo(identity, contract_no);
    const result_hw = await hwContractsGetByContractNo(identity, contract_no);

    const result = result_sw.concat(result_hw);

    const today = new Date();

    const updatedContracts = result.map((result) => {
      const validFrom = new Date(result.contract_valid_from);
      const validTo = new Date(result.contract_valid_to);

      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);

      // Extracting only the date part without the time
      const validFromDateString = validFrom.toISOString().split("T")[0];
      const validToDateString = validTo.toISOString().split("T")[0];

      const isValid = today >= validFrom && today <= validTo;

      return {
        ...result,
        contract_valid_from: validFromDateString,
        contract_valid_to: validToDateString,
        contract_valid: isValid ? "true" : "false",
      };
    });

    if (result[0] && result[0].error) {
      res.status(401).send({ data: updatedContracts });
    } else {
      res.status(200).send({ data: updatedContracts });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cHwContractsGetNo = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await hwContractsGetNo(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cSwContractsGetNo = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await swContractsGetNo(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};


module.exports.cSupportGetContracts = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    // Access search parameters from req.query
    const searchTenant = req.query.tenant;
    const searchValidity = req.query.validity;
    const searchContractor = req.query.contractor;
    const searchOffset = req.query.offset;

    let searchParams = {};

    if (searchTenant && searchTenant != '' && searchTenant != 'null' && searchTenant != 'undefined') {
      searchParams["searchTenant"] = searchTenant;
    } else {
      searchParams["searchTenant"] = false;
    }
    if (searchValidity && searchValidity != '' && searchValidity != 'null' && searchValidity != 'undefined') {
      searchParams["searchValidity"] = searchValidity;
    } else {
      searchParams["searchValidity"] = false;
    }
    if (searchContractor && searchContractor != '' && searchContractor != 'null' && searchContractor != 'undefined') {
      searchParams["searchContractor"] = searchContractor;
    } else {
      searchParams["searchContractor"] = false;
    }
    if (searchOffset && searchOffset != '' && searchOffset != 'null' && searchOffset != 'undefined') {
      searchParams["searchOffset"] = searchOffset;
    } else {
      searchParams["searchOffset"] = 0;
    }


    console.log(searchParams);


    const result = await supportGetContracts(identity, searchParams);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};