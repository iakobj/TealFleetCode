const express = require('express');
const tenantsRouter = express.Router();

// Import Controllers
const tenantsGetAll = require("../controllers/tenants/tenantsGetAll");
const tenantsGetById = require("../controllers/tenants/tenantsGetById");


// Home page route
tenantsRouter.get('/', tenantsGetAll );

tenantsRouter.get('/:id', tenantsGetById );

module.exports = tenantsRouter;