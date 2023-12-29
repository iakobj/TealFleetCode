const { query } = require("../services/db/index");

module.exports.sitesGetAll = async () => {
  const result = await query("SELECT * FROM sites");
  return result.rows;
};

module.exports.sitesGetById = async (id) => {
  const result = await query("SELECT * FROM sites WHERE site_id = $1", [id]);
  return result.rows;
};

module.exports.sitesGetByName = async (name) => {
  const result = await query("SELECT * FROM sites WHERE site_name = $1", [name]);
  return result.rows;
};

module.exports.sitesGetByAddress = async (address) => {
  const result = await query("SELECT * FROM sites WHERE site_address = $1", [
    address,
  ]);
  return result.rows;
};

module.exports.sitesGetByCity = async (city) => {
  const result = await query("SELECT * FROM sites WHERE site_city = $1", [city]);
  return result.rows;
};

module.exports.sitesGetByPostcode = async (postcode) => {
  const result = await query("SELECT * FROM sites WHERE site_postcode = $1", [
    postcode,
  ]);
  return result.rows;
};

module.exports.sitesGetByCountry = async (country) => {
  const result = await query("SELECT * FROM sites WHERE site_country = $1", [
    country,
  ]);
  return result.rows;
};

module.exports.sitesGetByTenant = async (tenant) => {
  const result = await query("SELECT * FROM sites WHERE tenant_id = $1", [
    tenant,
  ]);
  return result.rows;
};
