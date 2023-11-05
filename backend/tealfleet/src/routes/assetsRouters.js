/**
 * @swagger
 * components:
 *   schemas:
 *     asset_200:
 *       type: object
 *       example:
 *         asset_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         asset_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     asset_404:
 *       type: string
 *       example: No asset found
 *     asset_id_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     asset_name_404:
 *       type: string
 *       example: The asset was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: asset
 *   description: The Tealfleet managing API
 * /asset:
 *   get:
 *     summary: Get all asset
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
 *               $ref: '#/components/schemas/asset_404'
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
 
 // Import Controllers
 const {
   cAssetsGetAllSW,
   cAssetsGetAllHW,
   cAssetsGetAll,

 } = require("../controllers/assetsControllers");
 
 // asset catalog
 assetsRouters.get("/fleet/card/all", cAssetsGetAll); // Get all asset from catalog
 assetsRouters.get("/fleet/card/all/sw", cAssetsGetAllSW); // Get all asset from catalog
 assetsRouters.get("/fleet/card/all/hw", cAssetsGetAllHW); // Get all asset from catalog

 module.exports = assetsRouters;
 