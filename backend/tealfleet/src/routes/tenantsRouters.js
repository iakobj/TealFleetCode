/**
 * @swagger
 * components:
 *   schemas:
 *     tenants_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          example:
 *            "tenant_id": "20ae5464-e9dc-496f-b8ba-d674a2a47bba"
 *            "is_root": "false"
 *            "tenant_name": "ACME"
 *            "created_at": "2023-09-16T17:44:22.623Z"
 *     tenants_404:
 *       type: string
 *       example: No tenants found
 *     tenants_id_404:
 *       type: string
 *       example: The tenant was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     tenants_name_404:
 *       type: string
 *       example: The tenant was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: tenants
 *   description: Tenants or organizations 
 * /tenants:
 *   get:
 *     summary: Get all tenants
 *     tags: [tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_404'
 * 
 * /tenants/id/{id}:
 *   get:
 *     summary: Get tenant by id
 *     tags: [tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_id_404'
 * 
 * /tenants/name/{name}:
 *   get:
 *     summary: Get tenant by name
 *     tags: [tenants]
 *     responses:
 *       200:
 *         description: Tenant exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_200'
 *       404:
 *         description: Tenant does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tenants_name_404'
 *
 *
 */

const express = require("express");
const tenantsRouters = express.Router();

const {
  cTenantsGetAll,
  cTenantsGetById,
  cTenantsGetByName,
} = require("../controllers/tenantsControllers");

tenantsRouters.get("/", cTenantsGetAll);
tenantsRouters.get("/id/:id", cTenantsGetById);
tenantsRouters.get("/names/:name", cTenantsGetByName);

module.exports = tenantsRouters;
