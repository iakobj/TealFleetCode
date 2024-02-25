/**
 * @swagger
 * components:
 *   schemas:
 *     assets_sw_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "software_catalog_id": "2b3c4d5e-6f7a-caca-caca-000045678903"
 *            "hardware_asset_id": null
 *            "software_asset_name": "hq-esxi01.acme.com"
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "software_changed_at": "2023-11-08T19:14:14.590Z"
 *            "software_created_at": "2023-11-08T19:14:14.590Z"
 *            "vendor_id": "1a2b3c4d-8b8b-8b8b-8b8b-012345678901"
 *            "sw_category_id": "1e2c561c-1234-1234-1234-012345678901"
 *            "software_model_name": "ESXi"
 *            "software_version_number": "8.0 U2 12345678"
 *            "software_image": "/images/vendors/vmware/vmware-vcenter.jpg"
 *            "software_release_date": "2022-01-31T23:00:00.000Z"
 *            "software_end_of_life": "2023-01-31T23:00:00.000Z"
 *            "software_end_of_support": "2023-12-30T23:00:00.000Z"
 *            "software_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *            "software_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *            "is_root": true
 *            "tenant_name": "ACME Corporation"
 *            "created_at": "2023-11-08T19:14:14.590Z"
 *            "vendor_name": "vmware"
 *            "vendor_image": "vendor1.jpg"
 *            "vendor_created_at": "2023-11-08T19:14:14.590Z"
 *            "site_name": "Site 1"
 *            "site_address1": "123 Main St"
 *            "site_city": "City 1"
 *            "site_postcode": 12345
 *            "site_country": "Country 1"
 *            "site_changed_at": "2023-11-08T19:14:14.590Z"
 *            "site_created_at": "2023-11-08T19:14:14.590Z"
 *            "software_asset_id": "2b3c4d5e-b8b8-a8a8-a1a8-012345678903"
 *     assets_hw_200:
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
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "hardware_serial_no": "SN12343"
 *            "hardware_changed_at": "2023-11-08T19:14:14.590Z"
 *            "hardware_created_at": "2023-11-08T19:14:14.590Z"
 *            "vendor_id": "2b3c4d5e-8b8b-8b8b-8b8b-012345678903"
 *            "hw_category_id": "3b4d675e-4321-4321-4321-012345678902"
 *            "hardware_model_name": "5108-AC2"
 *            "hardware_part_number": "H12345"
 *            "hardware_image": "/images/vendors/cisco/cisco-ucs-5108-ac2.png"
 *            "hardware_release_date": "2021-12-31T23:00:00.000Z"
 *            "hardware_end_of_life": "2024-12-31T23:00:00.000Z"
 *            "hardware_end_of_support": "2025-12-30T23:00:00.000Z"
 *            "hardware_catalog_changed_at": "2023-11-08T19:14:14.590Z"
 *            "hardware_catalog_created_at": "2023-11-08T19:14:14.590Z"
 *            "is_root": false
 *            "tenant_name": "Red Pied Piper"
 *            "created_at": "2023-11-08T19:14:14.590Z"
 *            "vendor_name": "cisco"
 *            "vendor_image": "vendor3.jpg"
 *            "vendor_created_at": "2023-11-08T19:48:17.574Z"
 *            "site_name": "Site 1"
 *            "site_address1": "123 Main St"
 *            "site_city": "City 1"
 *            "site_postcode": 12345
 *            "site_country": "Country 1"
 *            "site_changed_at": "2023-11-08T19:14:14.590Z"
 *            "site_created_at": "2023-11-08T19:14:14.590Z"
 *     assets_404:
 *       type: string
 *       example: No assets found
 *     assets_id_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     assets_name_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type name ACMEs
 *
 * tags:
 *   name: assets
 *   description: Hardware and appliance suits assets
 * /assets/fleet/all:
 *   get:
 *     summary: Get all assets and their relevant information
 *     tags: [assets]
 *     responses:
 *       200:
 *         description: assets exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_sw_200'
 *       404:
 *         description: asset does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_404'
 * 
 * /assets/fleet/all/sw:
 *   get:
 *     summary: Get all appliance suits assets
 *     tags: [assets]
 *     responses:
 *       200:
 *         description: appliance suits exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_sw_200'
 *       404:
 *         description: appliance suits don't exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_404'
 * 
 * /assets/fleet/all/hw:
 *   get:
 *     summary: Get all hardware assets
 *     tags: [assets]
 *     responses:
 *       200:
 *         description: hardware exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_hw_200'
 *       404:
 *         description: hardware doesn't exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/assets_404'
 *
 *
 */

const express = require("express");
const assetsRouters = express.Router();
const bodyParser = require("body-parser");

assetsRouters.use(express.urlencoded({ extended: false }));
assetsRouters.use(bodyParser.json());

const {
  cDashboardGetStatusCardData,
  cDashboardGetSupportCardData,
  cDashboardGetTotalsCardData,

} = require("../controllers/dashboardControllers");

assetsRouters.get("/assets/status/:tenant?", cDashboardGetStatusCardData);
assetsRouters.get("/assets/totals/:tenant?", cDashboardGetTotalsCardData);
assetsRouters.get("/assets/support/:tenant?", cDashboardGetSupportCardData);

module.exports = assetsRouters;
