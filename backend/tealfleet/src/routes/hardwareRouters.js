/**
 * @swagger
 * components:
 *   schemas:
 *     catalogs_200:
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
 *     catalogs_hw_model_names_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "hardware_model_name": "UCS-C220-M6-SFF"
 *     assets_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "hardware_asset_id": "1a2b3c4d-3333-7777-3c80-012345678903"
 *            "hardware_catalog_id": "1e21e21c-8a1d-4f79-9d3a-a11122678901"
 *            "hardware_asset_name": "superbigcimc02.acme.com"
 *            "tenant_id": "112d675e-6f8c-41a7-bc2a-012345678902"
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "hardware_serial_no": "SN12343"
 *            "hardware_changed_at": "2023-11-08T19:14:14.590Z"
 *            "hardware_created_at": "2023-11-08T19:14:14.590Z"
 *     hardware_404:
 *       type: string
 *       example: No hardware found
 *
 * tags:
 *   name: hardware
 *   description: Hardware catalogs and assets
 * /hardware/catalogs:
 *   get:
 *     summary: Get all hardware from hardware catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs/id/{id}:
 *   get:
 *     summary: Get hardware by id from hardware catalog
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_catalog_id
 *       schema:
 *         type: uuid
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs/names/{name}:
 *   get:
 *     summary: Get hardware by hardware model name from hardware catalog
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_model_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/catalogs/vendors/{vendor}:
 *   get:
 *     summary: Get hardware by vendor name from hardware catalog
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: vendor_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/catalogs/partnumbers/{partnumber}:
 *   get:
 *     summary: Get hardware by part number from hardware catalog
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_part_number
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/catalogs/categories/{category}:
 *   get:
 *     summary: Get hardware by its category name from catalog
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hw_category
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/catalogs/models/names:
 *   get:
 *     summary: Get distinct hardware model names from catalog
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_hw_model_names_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * 
 * 
 * /hardware/assets:
 *   get:
 *     summary: Get all hardware assets from hardware assets
 *     tags: [hardware]
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/assets/id/{id}:
 *   get:
 *     summary: Get hardware asset by hardware asset id from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_asset_id
 *       schema:
 *         type: uuid
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/assets/names/{name}:
 *   get:
 *     summary: Get hardware asset by hardware model name from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_model_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 * 
 * /hardware/assets/vendors/{vendor}:
 *   get:
 *     summary: Get hardware asset by vendor name from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: vendor_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/assets/partnumbers/{partnumber}:
 *   get:
 *     summary: Get hardware asset by hardware asset part number from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_part_number
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/assets/serialnumbers/{serialnumber}:
 *   get:
 *     summary: Get hardware asset by hardware asset serial number from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: hardware_serial_no
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/assets/tenants/{tenant}:
 *   get:
 *     summary: Get hardware assets by tenant name from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: tenant_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 * /hardware/assets/sites/{site}:
 *   get:
 *     summary: Get hardware assets by site name from hardware assets
 *     tags: [hardware]
 *     parameters:
 *     - in: path
 *       name: site_name
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: Hardware catalogs exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: Hardware does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hardware_404'
 *
 */

const express = require("express");
const hardwareRouters = express.Router();

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

hardwareRouters.get("/catalogs", cHardwareCatGetAll);
hardwareRouters.get("/catalogs/id/:id", cHardwareCatGetById);
hardwareRouters.get("/catalogs/names/:name", cHardwareCatGetByName);
hardwareRouters.get("/catalogs/vendors/:vendor", cHardwareCatGetByVendor);
hardwareRouters.get("/catalogs/partnumbers/:partnumber", cHardwareCatGetByPartnumber);
hardwareRouters.get("/catalogs/categories/:category", cHardwareCatGetByCategory);
hardwareRouters.get("/catalogs/models/names", cHardwareCatGetHWModelName);

hardwareRouters.get("/assets/", cHardwareAssGetAll);
hardwareRouters.get("/assets/id/:id", cHardwareAssGetById);
hardwareRouters.get("/assets/names/:name", cHardwareAssGetByName);
hardwareRouters.get("/assets/vendors/:vendor", cHardwareAssGetByVendor);
hardwareRouters.get("/assets/partnumbers/:partnumber", cHardwareAssGetByPartnumber);
hardwareRouters.get("/assets/serialnumbers/:serialnumber", cHardwareAssGetBySerialnumber);
hardwareRouters.get("/assets/tenants/:tenant", cHardwareAssGetByTenant);
hardwareRouters.get("/assets/sites/:site", cHardwareAssGetBySite);

module.exports = hardwareRouters;


