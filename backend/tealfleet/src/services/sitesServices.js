const { query } = require("../services/db/index");

module.exports.sitesGetAll = async () => {
  const result = query("SELECT * FROM sites");
  return result;
};

module.exports.sitesGetById = async (id) => {
  const result = query("SELECT * FROM sites WHERE site_id = $1", [id]);
  return result;
};

module.exports.sitesGetByName = async (name) => {
  const result = query("SELECT * FROM sites WHERE name = $1", [name]);
  return result;
};

module.exports.sitesGetByName = async (city) => {
    const result = query("SELECT * FROM sites WHERE city = $1", [city]);
    return result;
};

module.exports.sitesGetByName = async (postcode) => {
    const result = query("SELECT * FROM sites WHERE postcode = $1", [postcode]);
    return result;
};

module.exports.sitesGetByName = async (country) => {
    const result = query("SELECT * FROM sites WHERE country = $1", [country]);
    return result;
};