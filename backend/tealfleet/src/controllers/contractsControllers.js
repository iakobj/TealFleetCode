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
  contractsGetAllContractTypes,
  contractsGetByContractNoBasic,

  contractsPostAdd,
  contractsPostAddAsset,

  contractsPostRemoveAsset,
  contractsPostRemoveContract,

} = require("../services/contractsServices");

const { checkIdentity } = require("../middlewares/identity");

const Joi = require("joi");
const { v4: uuidv4 } = require('uuid');

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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

    if (
      searchTenant &&
      searchTenant != "" &&
      searchTenant != "null" &&
      searchTenant != "undefined"
    ) {
      searchParams["searchTenant"] = searchTenant;
    } else {
      searchParams["searchTenant"] = false;
    }
    if (
      searchValidity &&
      searchValidity != "" &&
      searchValidity != "null" &&
      searchValidity != "undefined"
    ) {
      searchParams["searchValidity"] = searchValidity;
    } else {
      searchParams["searchValidity"] = false;
    }
    if (
      searchContractor &&
      searchContractor != "" &&
      searchContractor != "null" &&
      searchContractor != "undefined"
    ) {
      searchParams["searchContractor"] = searchContractor;
    } else {
      searchParams["searchContractor"] = false;
    }
    if (
      searchOffset &&
      searchOffset != "" &&
      searchOffset != "null" &&
      searchOffset != "undefined"
    ) {
      searchParams["searchOffset"] = searchOffset;
    } else {
      searchParams["searchOffset"] = 0;
    }

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

module.exports.cContractsGetAllContractTypes = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await contractsGetAllContractTypes(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cContractsGetByContractNoBasic = async (req, res) => {
  try {
    const contract_no = req.params.contract_no;
    const identity = await checkIdentity(req);
    const result = await contractsGetByContractNoBasic(identity, contract_no);
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

      const isValid = today >= validFrom && today <= validTo.setDate(validTo.getDate() + 1);

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

module.exports.cContractsPostAdd = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    let { contract_no, contract_type_id, contractor_name, contract_sla, tenant_id, contract_valid_from, contract_valid_to, contract_description } = req.body;

    const contract_id = uuidv4();

    const data = {
      contract_id: contract_id,
      contract_no: contract_no,
      contract_type_id: contract_type_id,
      contractor_name: contractor_name,
      contract_sla: contract_sla,
      tenant_id: tenant_id,
      contract_valid_from: contract_valid_from,
      contract_valid_to: contract_valid_to,
      contract_description: contract_description,
    };

    for (const key in data) {
      if (data[key] == "") {
        data[key] = undefined;
      }
    }

    const schema = Joi.object({
      contract_id: Joi.string().guid({version: 'uuidv4'}),
      contract_no: Joi.string().required(),
      contract_type_id: Joi.string().guid().optional(),
      contractor_name: Joi.string().alphanum().required(),
      contract_sla: Joi.string().alphanum().optional(),
      tenant_id: Joi.string().guid().required(),
      contract_valid_from: Joi.date().required(),
      contract_valid_to: Joi.date().required(),
      contract_description: Joi.string().optional(),
    });

    const validation = await schema.validate(data);

    if (validation.error) {
      res.status(400).send({ error: validation.error.details[0].message });
      return; 
    } else {
      const result = await contractsPostAdd(data);
      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send({contract_id});
        return;
      }
    }


  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports.cContractsPostAddAsset = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    let { newContractId, asset_id, asset_type } = req.body;
    console.log(newContractId, asset_id, asset_type);

      const result = await contractsPostAddAsset(identity, newContractId, asset_id, asset_type);

      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send("success");
        return;
      }
    } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }

};


// TODO
module.exports.cContractsPostRemoveAsset = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    let { newContractId, asset_id, asset_type } = req.body;
    console.log("remove asset from contract")
    console.log(newContractId, asset_id, asset_type);

      const result = await contractsPostRemoveAsset(identity, newContractId, asset_id, asset_type);

      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send("success");
        return;
      }
    } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }

};



// TODO
module.exports.cContractsPostRemoveContract = async (req, res) => {
  try {
    const identity = await checkIdentity(req); 

    let { contract_id } = req.body;
    console.log("remove contract")
    console.log(contract_id);

      const result = await contractsPostRemoveContract(identity, contract_id);

      if (result && result[0] && result[0].error) {
        res.status(400).send("error");
        return;
      } else {
        res.status(200).send("success");
        return;
      }
    } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }

};