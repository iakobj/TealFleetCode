const express = require("express");
const tenantsRouter = express.Router();

// Import Controllers
const {
  cTenantsGetAll,
  cTenantsGetById,
} = require("../controllers/tenantsControllers");

tenantsRouter.get("/", cTenantsGetAll); // Get all tenants
tenantsRouter.get("/:id", cTenantsGetById); // Get tenant by ID

module.exports = tenantsRouter;
