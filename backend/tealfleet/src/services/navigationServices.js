const { query } = require("../services/db/index");

module.exports.navigationGetAllMain = async () => {
  const result = query("SELECT * FROM main_navigation");
  return result;
};

module.exports.navigationGetByIdMain = async (id) => {
  const result = query("SELECT * FROM main_navigation WHERE main_nav_id = $1", [id]);
  return result;
};

module.exports.navigationGetAllSub = async () => {
    const result = query("SELECT * FROM sub_navigation");
    return result;
};
  
module.exports.navigationGetByIdSub = async (id) => {
    const result = query("SELECT * FROM sub_navigation WHERE main_nav_id = $1", [id]);
    return result;
};


