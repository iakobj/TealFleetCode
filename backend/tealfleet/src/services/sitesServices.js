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
  const result = await query("SELECT * FROM sites WHERE name = $1", [name]);
  return result.rows;
};

module.exports.sitesGetByName = async (city) => {
    const result = await query("SELECT * FROM sites WHERE city = $1", [city]);
    return result.rows;
};

module.exports.sitesGetByPostCode = async (postcode) => {
    const result = await query("SELECT * FROM sites WHERE postcode = $1", [postcode]);
    return result.rows;
};

module.exports.sitesGetByCountry = async (country) => {
    const result = await query("SELECT * FROM sites WHERE country = $1", [country]);
    return result.rows;
};