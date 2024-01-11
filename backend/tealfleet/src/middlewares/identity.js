const {
  tenantsGetAll,
  tenantsGetById,
  tenantsGetByName,
} = require("../services/tenantsServices");

module.exports.checkIdentity = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        req.session.user === undefined ||
        req.session.authenticated == false
      ) {
        reject("User session is undefined.");
      } else {
        console.log("User session is defined and authentication is true.")
        const userSession = req.session.user;

        const userTenant = await tenantsGetById(userSession.tenant_id);
        console.log(userSession);
        const identity = {
          user_id: userSession.id,
          user_email: userSession.email,
          tenant_id: userTenant[0].tenant_id,
          tenant_name: userTenant[0].tenant_name,
          tenant_root: userTenant[0].is_root,
        };
        console.log("Identity check passed.");
        console.log(identity);
        resolve({ data: identity });
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
