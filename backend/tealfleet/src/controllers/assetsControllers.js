const {
  assetsGetAllHW,
  assetsGetAllSW,
  assetsGetAllSWNum,
} = require("../services/assetsServices");

// Get (almost) all asset information
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

// Get (almost) all asset information SW
module.exports.cAssetsGetAllHW = async (req, res) => {
  try {
    const result = await assetsGetAllHW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// Get (almost) all asset information HW
module.exports.cAssetsGetAllSW = async (req, res) => {
  try {
    const result = await assetsGetAllSW();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// Get information for AssetsStatusCardData 
module.exports.cAssetsGetStatusCardData = async (req, res) => {
  try {
    const result = await assetsGetAllSWNum();
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};
