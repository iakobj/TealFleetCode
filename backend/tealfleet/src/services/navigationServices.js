const { query } = require("../services/db/index");

module.exports.navigationMainGetAll = async () => {
  const result = query("SELECT * FROM main_navigation");
  return result.rows;
};

module.exports.navigationMainGetById = async (id) => {
  const result = query("SELECT * FROM main_navigation WHERE main_nav_id = $1", [id]);
  return result.rows;
};

module.exports.navigationSubGetAll = async () => {
    const result = query("SELECT * FROM sub_navigation");
    return result.rows;
};
  
module.exports.navigationSubGetById = async (id) => {
    const result = query("SELECT * FROM sub_navigation WHERE main_nav_id = $1", [id]);
    return result.rows;
};


