const {
  assetsGetAllHW,
  assetsGetAllSW,
} = require("../services/assetsServices");

// Get (almost) all asset information
module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const result_sw = await assetsGetAllSW();
    const result_hw = await assetsGetAllHW();

    result_sw.forEach(function (obj) {
      for (var key in obj) {
        if (!key.startsWith("software")) {
          obj["sw_" + key] = obj[key];
          delete obj[key];
        }
      }
    });

    result_hw.forEach(function (obj) {
      for (var key in obj) {
        if (!key.startsWith("hardware")) {
          obj["hw_" + key] = obj[key];
          delete obj[key];
        }
      }
    });

    const result = result_sw.concat(result_hw);

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// Get (almost) all asset information SW
module.exports.cAssetsGetAllHW = async (req, res) => {
  try {
    const result = await assetsGetAllHW();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};

// Get (almost) all asset information HW
module.exports.cAssetsGetAllSW = async (req, res) => {
  try {
    const result = await assetsGetAllSW();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};
