const { query } = require("../services/db/index");

module.exports.checkIdentity = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        req.session.user === undefined ||
        req.session.authenticated == false
      ) {
        reject("User session is undefined.");
      } else {
        const userSession = req.session.user;
        const result = await query(
          "SELECT * FROM tenants WHERE tenant_id = $1",
          [userSession.tenant_id]
        );
        const userTenant = result.rows;

        const identity = {
          user_id: userSession.id,
          user_email: userSession.email,
          tenant_id: userTenant[0].tenant_id,
          tenant_name: userTenant[0].tenant_name,
          tenant_root: userTenant[0].is_root,
        };
        resolve({ data: identity });
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
