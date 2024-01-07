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

module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const result_sw = await assetsGetAllSW();
    const result_hw = await assetsGetAllHW();

    const result = result_sw.concat(result_hw);

    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

module.exports.cAssetsGetAllHW = async (req, res) => {
  try {
    const result = await assetsGetAllHW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

module.exports.cAssetsGetAllSW = async (req, res) => {
  try {
    const result = await assetsGetAllSW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO SW 1
module.exports.cAssetsGetStatusCardDataSW = async (req, res) => {
  try {
    const resultArray = await Promise.all([assetsGetNoSW(), swContractsGetNo(), swContractsGetAll()]);

    const allSw = resultArray[0][0].count;
    const allSupportedSw = resultArray[1][0].count;
    const allSwContracts = resultArray[2];

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
    const validContractsCount = updatedAllSwContracts.filter(contract => contract.contract_valid === "true").length;
    // Counting all contracts
    const totalContractsCount = updatedAllSwContracts.length;

    const allSW = {
      title: "All appliance suits",
      total: parseInt(allSw),
      percent: 100
    };
    const supportedSW = {
      title: "Appliances with support",
      total: parseInt(allSupportedSw),
      percent: parseInt(((allSupportedSw / allSw ) * 100)),
    };
    const unSupportedSW = {
      title: "Appliances without support",
      total: (allSw - allSupportedSw),
      percent: parseInt((100 - ((allSupportedSw / allSw ) * 100))),
    };
    const allContracts =     {
      title: "All Contracts",
      total: totalContractsCount,
      percent: 100,
    };
    const activeContracts =     {
      title: "All active Contracts",
      total: validContractsCount,
      percent: parseInt((validContractsCount / totalContractsCount) * 100 ),
    };
    const inActiveContracts =     {
      title: "All inactive Contracts",
      total: (totalContractsCount - validContractsCount),
      percent: parseInt((100 - ((validContractsCount / totalContractsCount ) * 100))),
    };

    const result = [allSW, supportedSW, unSupportedSW, allContracts, activeContracts, inActiveContracts]

    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO SW 2
module.exports.cAssetsGetSupportCardDataSW = async (req, res) => {
  try {
    const result = await assetsGetlNoHW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO SW 3
module.exports.cAssetsGetTotalsCardDataSW = async (req, res) => {
  try {
    const result = await assetsGetAllSW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO HW 1
module.exports.cAssetsGetStatusCardDataHW = async (req, res) => {
  try {
    const result = await assetsGetNoHW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO HW 2
module.exports.cAssetsGetSupportCardDataHW = async (req, res) => {
  try {
    const result = await assetsGetAllHW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// TODO HW 3
module.exports.cAssetsGetTotalsCardDataHW = async (req, res) => {
  try {
    const result = await assetsGetNoSW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};