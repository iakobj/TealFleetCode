/**
 * @swagger
 * components:
 *   schemas:
 *     hardware_200:
  *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "hardware_catalog_id": "1e21e21c-6f8c-41a7-bc2a-a11122678902"
 *            "vendor_id": "2b3c4d5e-8b8b-8b8b-8b8b-012345678903"
 *            "hw_category_id": "3b4d675e-4321-4321-4321-012345678902"
 *            "hardware_model_name": "UCS-C220-M6-SFF"
 *            "hardware_part_number": "H67890"
 *            "hardware_image": "/images/vendors/cisco/cisco-c220-m6-sff.png"
 *            "hardware_release_date": "2022-01-31T23:00:00.000Z"
 *            "hardware_end_of_life": "2024-01-31T23:00:00.000Z"
 *            "hardware_end_of_support": "2024-12-30T23:00:00.000Z"
 *            "hardware_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *            "hardware_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *     hardware_404:
 *       type: string
 *       example: No hardware found
 *
 * tags:
 *   name: hardware
 *   description: Hardware catalogs and assets
 * /hardware/catalogs:
 *   get:
 *     summary: Get all hardware from catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs/id/:id:
 *   get:
 *     summary: Get hardware by id from catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs/names/:name:
 *   get:
 *     summary: Get hardware by id from catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs//vendors/:vendor:
 *   get:
 *     summary: Get hardware by id from catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
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
  cHardwareCatGetHWModelName,

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
hardwareRouters.get("/catalogs/models/names", cHardwareCatGetHWModelName); // Get all unique Hardware model names from category

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


