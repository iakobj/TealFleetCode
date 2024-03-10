const {
  contractsGetAll,
  contractsGetAllNo,
  contractsGetByTenant,
  contractsGetByContractor,

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

module.exports.cContractsGetByContractor = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await contractsGetByContractor(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};