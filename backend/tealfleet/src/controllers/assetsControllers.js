const {
  aAsetsGetAll,

} = require("../services/assetsServices");

// Get all assets
module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const result = await assetsGetAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("No assets found");
  }
};


