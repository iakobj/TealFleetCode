const { query } = require("../services/db/index");

module.exports.navigationMainGetAll = async () => {
  const result = await query("SELECT * FROM main_navigation");
  return result.rows;
};

module.exports.navigationMainGetById = async (id) => {
  const result = await query("SELECT * FROM main_navigation WHERE main_nav_id = $1", [id]);
  return result.rows;
};

module.exports.navigationSubGetAll = async () => {
    const result = await query("SELECT * FROM sub_navigation");
    return result.rows;
};
  
module.exports.navigationSubGetById = async (id) => {
    const result = await query("SELECT * FROM sub_navigation WHERE main_nav_id = $1", [id]);
    return result.rows;
};

module.exports.navigationSubGetByName = async (name) => {
  const get_main_nav_id = await query("SELECT main_nav_id FROM main_navigation WHERE main_nav_item = $1", [name]);
  const main_nav_id = get_main_nav_id.rows[0].main_nav_id;

  const result = await query("SELECT * FROM sub_navigation WHERE main_nav_id = $1", [main_nav_id]);
  return result.rows;
};


