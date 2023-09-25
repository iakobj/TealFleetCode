const { query } = require("../services/db/index");

module.exports.navigationGetAll = async () => {
  const result = query("SELECT * FROM main_navigation");
  return result;
};

module.exports.navigationGetById = async (id) => {
  const result = query("SELECT * FROM main_navigation WHERE main_navigation_id = $1", [id]);
  return result;
};

module.exports.navigationGetByName = async (name) => {
  const result = query("SELECT * FROM main_navigation WHERE main_nav_item = $1", [name]);
  return result;
};


