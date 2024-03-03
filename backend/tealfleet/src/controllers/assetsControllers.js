const {
  assetsGetAllHW,
  assetsGetAllSW,
  assetsGetFleet,
} = require("../services/assetsServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cAssetsGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);

    // Access search parameters from req.query
    const searchVendor = req.query.vendor;
    const searchTenant = req.query.tenant;
    const searchSwmodel = req.query.swmodel;
    const searchHwmodel = req.query.hwmodel;
    const searchSitename = req.query.sitename;
    const searchOffset = req.query.offset;

    console.log(searchVendor, searchTenant, searchSwmodel, searchHwmodel, searchSitename, searchOffset );

    let searchParams = {};

    if (searchTenant && searchTenant != '' && searchTenant != 'null' && searchTenant != 'undefined') {
      searchParams["searchTenant"] = searchTenant;
    } else {
      searchParams["searchTenant"] = false;
    }
    if (searchSwmodel && searchSwmodel != '' && searchSwmodel != 'null' && searchSwmodel != 'undefined') {
      searchParams["searchSwmodel"] = searchSwmodel;
    } else {
      searchParams["searchSwmodel"] = false;
    }
    if (searchHwmodel && searchHwmodel != '' && searchHwmodel != 'null' && searchHwmodel != 'undefined') {
      searchParams["searchHwmodel"] = searchHwmodel;
    } else {
      searchParams["searchHwmodel"] = false;
    }
    if (searchSitename && searchSitename != '' && searchSitename != 'null' && searchSitename != 'undefined') {
      searchParams["searchSitename"] = searchSitename;
    } else {
      searchParams["searchSitename"] = false;
    }
    if (searchVendor && searchVendor != '' && searchVendor != 'null' && searchVendor != 'undefined') {
      searchParams["searchVendor"] = searchVendor;
    } else {
      searchParams["searchVendor"] = false;
    }
    if (searchOffset && searchOffset != '' && searchOffset != 'null' && searchOffset != 'undefined') {
      console.log("controller searchOffset");
      console.log(searchOffset);
      searchParams["searchOffset"] = searchOffset;
    } else {
      searchParams["searchOffset"] = 0;
    }

    console.log(searchParams);

    const result = await assetsGetFleet(identity, searchParams);

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
