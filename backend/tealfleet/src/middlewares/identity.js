const {
  tenantsGetAll,
  tenantsGetById,
  tenantsGetByName,
} = require("../services/tenantsServices");

module.exports.checkIdentity = async (req) => {
  return new Promise(async (resolve, reject) => {
    const userSessionID = req.sessionID;
    const userSession = req.session.user;
    const userAuthenticated = req.session.authenticated;

    try {
      const userTenant = await tenantsGetById(userSession.tenant_id);

      if (userSessionID && userSession && userAuthenticated == true) {
        const identity = {
          tenant_id: userTenant[0].tenant_id,
          tenant_name: userTenant[0].tenant_name,
          tenant_root: userTenant[0].is_root,
        };
        console.log("Athenticated");
        resolve({data: identity});
      } else {
        resolve("Identity resolver error.");
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
