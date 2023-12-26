/**
 * @swagger
 * components:
 *   schemas:
 *     assets_200:
 *       type: object
 *       example:
 *          "software_catalog_id": "2b3c4d5e-6f7a-caca-caca-000045678903"
 *          "hardware_asset_id": null
 *          "software_asset_name": "hq-esxi01.acme.com"
 *          "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *          "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *          "software_changed_at": "2023-11-08T19:14:14.590Z"
 *          "software_created_at": "2023-11-08T19:14:14.590Z"
 *          "vendor_id": "1a2b3c4d-8b8b-8b8b-8b8b-012345678901"
 *          "sw_category_id": "1e2c561c-1234-1234-1234-012345678901"
 *          "software_model_name": "ESXi"
 *          "software_version_number": "8.0 U2 12345678"
 *          "software_image": "/images/vendors/vmware/vmware-vcenter.jpg"
 *          "software_release_date": "2022-01-31T23:00:00.000Z"
 *          "software_end_of_life": "2023-01-31T23:00:00.000Z"
 *          "software_end_of_support": "2023-12-30T23:00:00.000Z"
 *          "software_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *          "software_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *          "is_root": true
 *          "tenant_name": "ACME Corporation"
 *          "created_at": "2023-11-08T19:14:14.590Z"
 *          "vendor_name": "vmware"
 *          "vendor_image": "vendor1.jpg"
 *          "vendor_created_at": "2023-11-08T19:14:14.590Z"
 *          "site_name": "Site 1"
 *          "site_address1": "123 Main St"
 *          "site_city": "City 1"
 *          "site_postcode": 12345
 *          "site_country": "Country 1"
 *          "site_changed_at": "2023-11-08T19:14:14.590Z"
 *          "site_created_at": "2023-11-08T19:14:14.590Z"
 *          software_asset_id": "2b3c4d5e-b8b8-a8a8-a1a8-012345678903"
 *     assets_404:
 *       type: string
 *       example: No asset found
 *     assets_id_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     assets_name_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: assets
 *   description: The Tealfleet managing API
 * /assets/fleet/cards/all:
 *   get:
 *     summary: Get all asset
 *     tags: [assets]
 *     responses:
 *       200:
 *         description: asset exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_200'
 *       404:
 *         description: asset does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_404'
 * 
 * /asset/id/{id}:
 *   get:
 *     summary: Get asset by id
 *     tags: [asset]
 *     responses:
 *       200:
 *         description: asset exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/asset_200'
 *       404:
 *         description: asset does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/asset_id_404'
 * 
 * /asset/name/{name}:
 *   get:
 *     summary: Get asset by name
 *     tags: [asset]
 *     responses:
 *       200:
 *         description: asset exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/asset_200'
 *       404:
 *         description: asset does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/asset_name_404'
 *
 *
 */

const express = require("express");
const assetsRouters = express.Router();
const bodyParser = require("body-parser");

assetsRouters.use(express.urlencoded({ extended: false }));
assetsRouters.use(bodyParser.json());

// Import Controllers
const {
  cAssetsGetAllSW,
  cAssetsGetAllHW,
  cAssetsGetAll,
  cAssetsGetStatusCardData
} = require("../controllers/assetsControllers");

// asset catalog
assetsRouters.get("/fleet/cards/all", cAssetsGetAll); // Get all asset from catalog
assetsRouters.get("/fleet/cards/all/sw", cAssetsGetAllSW); // Get all asset from catalog
assetsRouters.get("/fleet/cards/all/hw", cAssetsGetAllHW); // Get all asset from catalog

assetsRouters.get("/dashboard/widgets/status", cAssetsGetStatusCardData); // dashboard widgets


module.exports = assetsRouters;
