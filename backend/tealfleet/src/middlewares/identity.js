const { query } = require("../services/db/index");

module.exports.checkIdentity = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        req.session.user === undefined ||
        req.session.authenticated == false
      ) {
        reject("User session is not defined.");
      } else {
        const userSession = req.session.user;

        const userTenantData = await query(
          "SELECT * FROM tenants WHERE tenant_id = $1",
          [userSession.tenant_id]
        );
        const userTenant = userTenantData.rows;

        let mockTenantName;
        let mockTenantId;
        if (req.params.tenant) {
          mockTenantName = req.params.tenant;

          const mockTenantData = await query(
            "SELECT * FROM tenants WHERE tenant_name = $1",
            [mockTenantName]
          );
          
          mockTenantId = mockTenantData.rows[0].tenant_id;
        }

        const identity = {
          user_id: userSession.id,
          user_email: userSession.email,
          tenant_id: userTenant[0].tenant_id,
          tenant_name: userTenant[0].tenant_name,
          tenant_root: userTenant[0].is_root,
          mock_tenant_name: mockTenantName,
          mock_tenant_id: mockTenantId,
        };
        resolve({ data: identity });
      }
    } catch (error) {
      reject({ data: error });
    }
  });
};
