/**
 * @swagger
 * components:
 *   schemas:
 *     Tenants_200:
 *       type: object
 *       example:
 *         tenant_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         tenant_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     Tenants_404:
 *       type: string
 *       example: No tenants found
 *     Tenants_id_404:
 *       type: string
 *       example: The tenant was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     Tenants_name_404:
 *       type: string
 *       example: The tenant was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Tenants
 *   description: The Tealfleet managing API
 * /tenants:
 *   get:
 *     summary: Get all tenants
 *     tags: [Tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_404'
 * 
 * /tenants/id/{id}:
 *   get:
 *     summary: Get tenant by id
 *     tags: [Tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_id_404'
 * 
 * /tenants/name/{name}:
 *   get:
 *     summary: Get tenant by name
 *     tags: [Tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants_name_404'
 *
 *
 */

const express = require("express");
const tenantsRouter = express.Router();

// Import Controllers
const {
  cTenantsGetAll,
  cTenantsGetById,
  cTenantsGetByName,
} = require("../controllers/tenantsControllers");

tenantsRouter.get("/", cTenantsGetAll); // Get all tenants
tenantsRouter.get("/id/:id", cTenantsGetById); // Get tenant by ID
tenantsRouter.get("/name/:name", cTenantsGetByName); // Get tenant by Name

module.exports = tenantsRouter;
