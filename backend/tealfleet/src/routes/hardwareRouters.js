/**
 * @swagger
 * components:
 *   schemas:
 *     Hardware_200:
 *       type: object
 *       example:
 *         Hardware_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         Hardware_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     Hardware_404:
 *       type: string
 *       example: No Hardware found
 *     Hardware_id_404:
 *       type: string
 *       example: The Hardware was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     Hardware_name_404:
 *       type: string
 *       example: The Hardware was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Hardware
 *   description: The Tealfleet managing API
 * /Hardware:
 *   get:
 *     summary: Get all Hardware
 *     tags: [Hardware]
 *     responses:
 *       200:
 *         description: Hardware exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_404'
 * 
 * /Hardware/id/{id}:
 *   get:
 *     summary: Get Hardware by id
 *     tags: [Hardware]
 *     responses:
 *       200:
 *         description: Hardware exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_id_404'
 * 
 * /Hardware/name/{name}:
 *   get:
 *     summary: Get Hardware by name
 *     tags: [Hardware]
 *     responses:
 *       200:
 *         description: Hardware exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hardware_name_404'
 *
 *
 */

const express = require("express");
const hardwareRouters = express.Router();

// Import Controllers
const {
  cHardwareCatGetAll,
  cHardwareCatGetById,
  cHardwareCatGetByName,
  cHardwareCatGetByVendor,
  cHardwareCatGetByPartnumber,
  cHardwareCatGetByCategory,
  cHardwareCatGetSWModelName,

  cHardwareAssGetAll,
  cHardwareAssGetById,
  cHardwareAssGetByName,
  cHardwareAssGetByVendor,
  cHardwareAssGetByPartnumber,
  cHardwareAssGetBySerialnumber,
  cHardwareAssGetByTenant,
  cHardwareAssGetBySite,
} = require("../controllers/hardwareControllers");

// Hardware catalog
hardwareRouters.get("/catalogs", cHardwareCatGetAll); // Get all Hardware from catalog
hardwareRouters.get("/catalogs/id/:id", cHardwareCatGetById); // Get Hardware by id from catalog
hardwareRouters.get("/catalogs/names/:name", cHardwareCatGetByName); // Get Hardware by model name from catalog
hardwareRouters.get("/catalogs/vendors/:vendor", cHardwareCatGetByVendor); // Get Hardware by vendor from catalog
hardwareRouters.get("/catalogs/partnumbers:partnumber", cHardwareCatGetByPartnumber); // Get Hardware by version from part number
hardwareRouters.get("/catalogs/categories/:category", cHardwareCatGetByCategory); // Get Hardware by version from category
hardwareRouters.get("/catalogs/models/names", cHardwareCatGetSWModelName); // Get all unique Hardware model names from category

// Hardware assets
hardwareRouters.get("/assets/", cHardwareAssGetAll); // Get all Hardware from assets
hardwareRouters.get("/assets/id/:id", cHardwareAssGetById); // Get Hardware by id from assets
hardwareRouters.get("/assets/names/:name", cHardwareAssGetByName); // Get Hardware by model name from assets
hardwareRouters.get("/assets/vendors/:vendor", cHardwareAssGetByVendor); // Get Hardware by vendor from assets
hardwareRouters.get("/assets/partnumbers/:partnumber", cHardwareAssGetByPartnumber); // Get Hardware by part number from assets
hardwareRouters.get("/assets/serialnumbers/:serialnumber", cHardwareAssGetBySerialnumber); // Get Hardware by serial number from assets
hardwareRouters.get("/assets/tenants/:tenant", cHardwareAssGetByTenant); // Get Hardware by tenant from assets
hardwareRouters.get("/assets/sites/:site", cHardwareAssGetBySite); // Get Hardware by site from assets

module.exports = hardwareRouters;


