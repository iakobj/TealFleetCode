const {
  assetsGetAllHW,
  assetsGetNoHW,
  assetsGetAllSW,
  assetsGetNoSW,
} = require("../services/assetsServices");

const {
  contractsGetAll,
  contractsGetAllNo,

  swContractsGetNo,
  swContractsGetAll,

  hwContractsGetNo,
  hwContractsGetAll,
} = require("../services/contractsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cDashboardGetStatusCardData = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const resultArray = await Promise.all([
      assetsGetNoSW(identity),
      assetsGetNoHW(identity),
      swContractsGetNo(identity),
      hwContractsGetNo(identity),
      contractsGetAllNo(identity),
      contractsGetAll(identity),
    ]);

    console.log(resultArray);

    const result_sw = await assetsGetAllSW(identity);
    const result_hw = await assetsGetAllHW(identity);

    const assetsAll = result_sw.concat(result_hw);

    const assetsNoSW = resultArray[0][0].count;
    const assetsNoHW = resultArray[1][0].count;
    const contractsNoSW = resultArray[2][0].count;
    const contractsNoHW = resultArray[3][0].count;
    const contractsAllNo = resultArray[4][0].count;
    const contractsAll = resultArray[5];

    const noOfAllAssets = parseInt(assetsNoSW) + parseInt(assetsNoHW);
    const noOfAllCoveredAssets =
      parseInt(contractsNoSW) + parseInt(contractsNoHW);
    const noOfAllUncoveredAssets = noOfAllAssets - noOfAllCoveredAssets;

    const today = new Date();
    const validContractsCount = contractsAll.reduce((count, contract) => {
      const validFrom = new Date(contract.contract_valid_from);
      const validTo = new Date(contract.contract_valid_to);
      // Add a day to validTo so the comparison works correctly
      validTo.setDate(validTo.getDate() + 1);
      const isValid = today >= validFrom && today <= validTo;
      return isValid ? count + 1 : count;
    }, 0);

    const fourMonthsLater = new Date();
    fourMonthsLater.setMonth(fourMonthsLater.getMonth() + 4);

    const contractsWithinFourMonths = contractsAll.filter((contract) => {
      const validTo = new Date(contract.contract_valid_to);
      return validTo <= fourMonthsLater && validTo >= today;
    });

    const contractsWithinFourMonthsCount = contractsWithinFourMonths.length;

    // Calculate the start date of the last month
    const lastMonthStartDate = new Date();
    lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);
    lastMonthStartDate.setDate(1);
    lastMonthStartDate.setHours(0, 0, 0, 0);

    // Calculate the end date of the last month
    const lastMonthEndDate = new Date();
    lastMonthEndDate.setDate(0); // Move to the last day of the previous month
    lastMonthEndDate.setHours(23, 59, 59, 999);

    // Count the number of hardware assets created in the last month
    const hardwareCreatedLastMonthCount = assetsAll.reduce((count, asset) => {
      const hardwareCreatedAt = new Date(asset.hardware_created_at);
      if (
        hardwareCreatedAt >= lastMonthStartDate &&
        hardwareCreatedAt <= lastMonthEndDate
      ) {
        count++;
      }
      return count;
    }, 0);

    const allAssets = {
      title: "All assets",
      total: noOfAllAssets,
      percent: 100,
    };
    const coveredAssets = {
      title: "Covered assets",
      total: noOfAllCoveredAssets,
      percent: ((100 / noOfAllAssets) * noOfAllCoveredAssets).toFixed(0),
    };
    const uncoveredAssets = {
      title: "Uncovered assets",
      total: noOfAllUncoveredAssets,
      percent: 69,
    };
    const newAssets = {
      title: "New assets",
      total: hardwareCreatedLastMonthCount,
      percent: ((100 / noOfAllAssets) * hardwareCreatedLastMonthCount).toFixed(0),
    };
    const allContracts = {
      title: "All contracts",
      total: contractsAllNo,
      percent: 100,
    };
    const activeContracts = {
      title: "Active contracts",
      total: validContractsCount,
      percent: ((100 / contractsAllNo) * validContractsCount).toFixed(0),
    };
    const expiredContracts = {
      title: "Expired contracts",
      total: contractsAllNo - validContractsCount,
      percent: (
        (100 / contractsAllNo) *
        (contractsAllNo - validContractsCount)
      ).toFixed(0),
    };
    const soonExpired = {
      title: "Contracts ends soon",
      total: contractsWithinFourMonthsCount,
      percent: (
        (100 / contractsAllNo) *
        contractsWithinFourMonthsCount
      ).toFixed(0),
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

// TODO 2
module.exports.cDashboardGetSupportCardData = async (req, res) => {
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

// TODO 3
module.exports.cDashboardGetTotalsCardData = async (req, res) => {
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
