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
 *            "software_catalog_id": "1a2b3c4d-5e6f-caca-caca-000045678901"
 *            "vendor_id": "2b3c4d5e-8b8b-8b8b-8b8b-012345678902"
 *            "sw_category_id": "1e2c561c-1234-1234-1234-012345678901"
 *            "software_model_name": "Veeam backup & replication"
 *            "software_version_number": "12.5635 123456"
 *            "software_image": "/images/vendors/veeam/veeam.png"
 *            "software_release_date": "2021-12-31T23:00:00.000Z"
 *            "software_end_of_life": "2023-12-31T23:00:00.000Z"
 *            "software_end_of_support": "2024-12-30T23:00:00.000Z"
 *            "software_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *            "software_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *     assets_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          example:
 *            "software_catalog_id": "1a2b3c4d-5e6f-caca-caca-000045678901"
 *            "vendor_id": "2b3c4d5e-8b8b-8b8b-8b8b-012345678902"
 *            "sw_category_id": "1e2c561c-1234-1234-1234-012345678901"
 *            "software_model_name": "Veeam backup & replication"
 *            "software_version_number": "12.5635 123456"
 *            "software_image": "/images/vendors/veeam/veeam.png"
 *            "software_release_date": "2021-12-31T23:00:00.000Z"
 *            "software_end_of_life": "2023-12-31T23:00:00.000Z"
 *            "software_end_of_support": "2024-12-30T23:00:00.000Z"
 *            "software_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *            "software_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *     models_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          example:
 *            "software_model_name": "Veeam backup & replication"
 *     software_404:
 *       type: string
 *       example: No appliance suits found
 *     software_id_404:
 *       type: string
 *       example: The appliance suits was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     software_name_404:
 *       type: string
 *       example: The appliance suits was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: software
 *   description: Appliance suits catalogs and assets
 * /software/catalogs:
 *   get:
 *     summary: Get all appliance suits
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: software does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_404'
 * 
 * /software/catalogs/id/{id}:
 *   get:
 *     summary: Get appliance suits by id
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_id_404'
 * 
 * /software/catalogs/names/{name}:
 *   get:
 *     summary: Get appliance suits by name
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 *
 * /software/catalogs/vendors/{vendor}:
 *   get:
 *     summary: Get appliance suits by vendor
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/catalogs/versions/{version}:
 *   get:
 *     summary: Get appliance suits by version
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/catalogs/categories/{category}:
 *   get:
 *     summary: Get appliance suits by category
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/catalogs_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/catalogs/models/names:
 *   get:
 *     summary: Get appliance suits by model name
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/models_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * 
 * /software/assets/:
 *   get:
 *     summary: Get all appliance suits from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/id/{id}:
 *   get:
 *     summary: Get appliance suits by id from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/names/{name}:
 *   get:
 *     summary: Get appliance suits by model name from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/vendors/{vendor}:
 *   get:
 *     summary: Get appliance suits by name from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/versions/{version}:
 *   get:
 *     summary: Get appliance suits by name from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/tenants/{tenant}:
 *   get:
 *     summary: Get appliance suits by name from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 * 
 * /software/assets/sites/{site}:
 *   get:
 *     summary: Get appliance suits by name from assets
 *     tags: [software]
 *     responses:
 *       200:
 *         description: appliance suite exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: appliance suits does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/software_name_404'
 */

const express = require("express");
const softwareRouters = express.Router();

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

softwareRouters.get("/catalogs", cSoftwareCatGetAll);
softwareRouters.get("/catalogs/id/:id", cSoftwareCatGetById);
softwareRouters.get("/catalogs/names/:name", cSoftwareCatGetByName);
softwareRouters.get("/catalogs/vendors/:vendor", cSoftwareCatGetByVendor);
softwareRouters.get("/catalogs/versions/:version", cSoftwareCatGetByVersion);
softwareRouters.get("/catalogs/categories/:category", cSoftwareCatGetByCategory);
softwareRouters.get("/catalogs/models/names", cSoftwareCatGetSWModelName);

softwareRouters.get("/assets/", cSoftwareAssGetAll);
softwareRouters.get("/assets/id/:id", cSoftwareAssGetById);
softwareRouters.get("/assets/names/:name", cSoftwareAssGetByName);
softwareRouters.get("/assets/vendors/:vendor", cSoftwareAssGetByVendor);
softwareRouters.get("/assets/versions/:version", cSoftwareAssGetByVersion);
softwareRouters.get("/assets/tenants/:tenant", cSoftwareAssGetByTenant);
softwareRouters.get("/assets/sites/:site", cSoftwareAssGetBySite);

module.exports = softwareRouters;
