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
const HardwareRouters = express.Router();

// Import Controllers
const {
  cHardwareCatGetAll,
  cHardwareCatGetById,
  cHardwareCatGetByName,
  cHardwareCatGetByVendor,
  cHardwareCatGetByPartnumber,
  cHardwareAssGetAll,
  cHardwareAssGetById,
  cHardwareAssGetByName,
  cHardwareAssGetByVendor,
  cHardwareAssGetByVersion,
  cHardwareAssGetByTenant,
  cHardwareAssGetBySite,
} = require("../controllers/hardwareControllers");

// Hardware catalog
hardwareRouters.get("/catalog", cHardwareCatGetAll); // Get all Hardware from catalog
hardwareRouters.get("/catalog/id/:id", cHardwareCatGetById); // Get Hardware by id from catalog
hardwareRouters.get("/catalog/name/:name", cHardwareCatGetByName); // Get Hardware by model name from catalog
hardwareRouters.get("/catalog/vendor/:vendor", cHardwareCatGetByVendor); // Get Hardware by vendor from catalog
hardwareRouters.get("/catalog/category/:category", cHardwareCatGetByCategory); // Get Hardware by version from category
hardwareRouters.get("/catalog/partnumber/:partnumber", cHardwareCatGetByPartnumber); // Get Hardware by version from part number

// Hardware assets
hardwareRouters.get("/asset/", cHardwareAssGetAll); // Get all Hardware from assets
hardwareRouters.get("/asset/id/:id", cHardwareAssGetById); // Get Hardware by id from assets
hardwareRouters.get("/asset/name/:name", cHardwareAssGetByName); // Get Hardware by model name from assets
hardwareRouters.get("/asset/vendor/:vendor", cHardwareAssGetByVendor); // Get Hardware by vendor from assets
hardwareRouters.get("/asset/version/:version", cHardwareAssGetByVersion); // Get Hardware by version from assets
hardwareRouters.get("/asset/tenant/:tenant", cHardwareAssGetByTenant); // Get Hardware by tenant from assets
hardwareRouters.get("/asset/site/:site", cHardwareAssGetBySite); // Get Hardware by site from assets

module.exports = hardwareRouters;
