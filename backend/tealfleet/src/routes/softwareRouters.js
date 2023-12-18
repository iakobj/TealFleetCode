/**
 * @swagger
 * components:
 *   schemas:
 *     Software_200:
 *       type: object
 *       example:
 *         software_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         software_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     Software_404:
 *       type: string
 *       example: No Software found
 *     Software_id_404:
 *       type: string
 *       example: The software was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     Software_name_404:
 *       type: string
 *       example: The software was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Software
 *   description: The Tealfleet managing API
 * /Software:
 *   get:
 *     summary: Get all Software
 *     tags: [Software]
 *     responses:
 *       200:
 *         description: software exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_200'
 *       404:
 *         description: software does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_404'
 * 
 * /Software/id/{id}:
 *   get:
 *     summary: Get software by id
 *     tags: [Software]
 *     responses:
 *       200:
 *         description: software exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_200'
 *       404:
 *         description: software does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_id_404'
 * 
 * /Software/name/{name}:
 *   get:
 *     summary: Get software by name
 *     tags: [Software]
 *     responses:
 *       200:
 *         description: software exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_200'
 *       404:
 *         description: software does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Software_name_404'
 *
 *
 */

const express = require("express");
const softwareRouters = express.Router();

// Import Controllers
const {
  cSoftwareCatGetAll,
  cSoftwareCatGetById,
  cSoftwareCatGetByName,
  cSoftwareCatGetByVendor,
  cSoftwareCatGetByVersion,
  cSoftwareCatGetByCategory,
  cSoftwareCatGetSWModelName,
  cSoftwareAssGetAll,
  cSoftwareAssGetById,
  cSoftwareAssGetByName,
  cSoftwareAssGetByVendor,
  cSoftwareAssGetByVersion,
  cSoftwareAssGetByTenant,
  cSoftwareAssGetBySite,
} = require("../controllers/softwareControllers");

// Software catalog
softwareRouters.get("/catalogs", cSoftwareCatGetAll); // Get all Software from catalog
softwareRouters.get("/catalogs/id/:id", cSoftwareCatGetById); // Get software by id from catalog
softwareRouters.get("/catalogs/names/:name", cSoftwareCatGetByName); // Get software by model name from catalog
softwareRouters.get("/catalogs/vendors/:vendor", cSoftwareCatGetByVendor); // Get software by vendor from catalog
softwareRouters.get("/catalogs/versions/:version", cSoftwareCatGetByVersion); // Get software by version from catalog
softwareRouters.get("/catalogs/categories/:category", cSoftwareCatGetByCategory); // Get software by version from category
softwareRouters.get("/catalogs/models/names", cSoftwareCatGetSWModelName); // Get all unique software model names

// Software assets
softwareRouters.get("/assets/", cSoftwareAssGetAll); // Get all Software from assets
softwareRouters.get("/assets/id/:id", cSoftwareAssGetById); // Get software by id from assets
softwareRouters.get("/assets/names/:name", cSoftwareAssGetByName); // Get software by model name from assets
softwareRouters.get("/assets/vendors/:vendor", cSoftwareAssGetByVendor); // Get software by vendor from assets
softwareRouters.get("/assets/versions/:version", cSoftwareAssGetByVersion); // Get software by version from assets
softwareRouters.get("/assets/tenants/:tenant", cSoftwareAssGetByTenant); // Get software by tenant from assets
softwareRouters.get("/assets/sites/:site", cSoftwareAssGetBySite); // Get software by site from assets

module.exports = softwareRouters;
