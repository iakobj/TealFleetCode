const {
  assetsGetAllHW,
  assetsGetNoHW,
  assetsGetAllSW,
  assetsGetNoSW,
} = require("../services/assetsServices");

const {
  swContractsGetNo,
  swContractsGetAll,

  hwContractsGetNo,
  hwContractsGetAll,
} = require("../services/contractsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result_sw = await assetsGetAllSW(identity);
    const result_hw = await assetsGetAllHW(identity);

    const result = result_sw.concat(result_hw);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetAllHW = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetAllHW(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetAllSW = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetAllSW(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

module.exports.cAssetsGetStatusCardData = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const resultArray = await Promise.all([
      assetsGetNoSW(identity),
      assetsGetNoHW(identity),
      swContractsGetNo(identity),
      swContractsGetAll(identity),
    ]);
    const allSw = resultArray[0][0].count;
    const allHw = resultArray[1][0].count;
    const allcoveredAssets = resultArray[2][0].count;
    const allSwContracts = resultArray[3];

    console.log(resultArray);

    const today = new Date();
    const updatedAllSwContracts = allSwContracts.map((allSwContracts) => {
      const validFrom = new Date(allSwContracts.contract_valid_from);
      const validTo = new Date(allSwContracts.contract_valid_to);
      // Add a day to validFrom and validTo so the return will be the same as in the databse
      validFrom.setDate(validFrom.getDate() + 1);
      validTo.setDate(validTo.getDate() + 1);
      const isValid = today >= validFrom && today <= validTo;
      return {
        contract_valid: isValid ? "true" : "false",
      };
    });

    // Counting valid contracts
    const validContractsCount = updatedAllSwContracts.filter(
      (contract) => contract.contract_valid === "true"
    ).length;
    // Counting all contracts
    const totalContractsCount = updatedAllSwContracts.length;

    const allAssets = {
      title: "All assets",
      total: parseInt(allSw) + parseInt(allHw),
      percent: 100,
    };
    const coveredAssets = {
      title: "Covered assets",
      total: parseInt(allcoveredAssets),
      percent: parseInt((allcoveredAssets / allSw) * 100),
    };
    const uncoveredAssets = {
      title: "Uncovered assets",
      total: 5,
      percent: parseInt(100 - (allcoveredAssets / allSw) * 100),
    };
    const newAssets = {
      title: "New assets",
      total: 11,
      percent: parseInt(100 - (allcoveredAssets / allSw) * 100),
    };
    const allContracts = {
      title: "All contracts",
      total: totalContractsCount,
      percent: 100,
    };
    const activeContracts = {
      title: "Active contracts",
      total: validContractsCount,
      percent: parseInt((validContractsCount / totalContractsCount) * 100),
    };
    const expiredContracts = {
      title: "Expired contracts",
      total: totalContractsCount - validContractsCount,
      percent: parseInt(
        100 - (validContractsCount / totalContractsCount) * 100
      ),
    };
    const soonExpired = {
      title: "Contracts ends soon",
      total: totalContractsCount - validContractsCount,
      percent: parseInt(
        100 - (validContractsCount / totalContractsCount) * 100
      ),
    };

    const result = [
      allAssets,
      coveredAssets,
      uncoveredAssets,
      newAssets,
      allContracts,
      activeContracts,
      expiredContracts,
      soonExpired,
    ];

    if (result[0] && result[0].error) {
      console.log(result);
      res.status(401).send({ data: result });
    } else {
      console.log(result);
      res.status(200).send({ data: result });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ data: [{ error }] });
  }
};

// TODO SW 2
module.exports.cAssetsGetSupportCardData = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetNoHW(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};

// TODO SW 3
module.exports.cAssetsGetTotalsCardData = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await assetsGetallAssets(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({ data: [{ error }] });
  }
};
