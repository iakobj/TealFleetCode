/**
 * @swagger
 * components:
 *   schemas:
 *     Tenants:
 *       type: object
 *       required:
 *         - id
 *         - is_root
 *         - name
 *       properties:
 *         id:
 *           type: uuid
 *           description: The auto-generated id of the tenant
 *         is_root:
 *           type: boolean
 *           description: If the tenant is the root organization
 *         tenant_name:
 *           type: string
 *           description: Name of the tenant
 *         createdAt:
 *           type: date
 *           format: date
 *           description: The date the tenant was added
 *       example:
 *         tenant_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         tenant_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 */

const express = require("express");
const tenantsRouter = express.Router();

// Import Controllers
const {
  cTenantsGetAll,
  cTenantsGetById,
  cTenantsGetByName,
} = require("../controllers/tenantsControllers");

/**
 * @swagger
 * tags:
 *   name: Tenants
 *   description: The Tealfleet managing API
 * /tenants:
 *   get:
 *     summary: Get all tenants
 *     tags: [Tenants]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tenants'
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenants'
 *       404:
 *         description: No tenants found
 *
 */
tenantsRouter.get("/", cTenantsGetAll); // Get all tenants

tenantsRouter.get("/id/:id", cTenantsGetById); // Get tenant by ID

tenantsRouter.get("/name/:name", cTenantsGetByName); // Get tenant by Name

module.exports = tenantsRouter;
