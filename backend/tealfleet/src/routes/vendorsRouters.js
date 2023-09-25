/**
 * @swagger
 * components:
 *   schemas:
 *     vendors_200:
 *       type: object
 *       example:
 *         vendor_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         vendor_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     vendors_404:
 *       type: string
 *       example: No vendors found
 *     vendors_id_404:
 *       type: string
 *       example: The vendor was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     vendors_name_404:
 *       type: string
 *       example: The vendor was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: vendors
 *   description: The Tealfleet managing API
 * /vendors:
 *   get:
 *     summary: Get all vendors
 *     tags: [vendors]
 *     responses:
 *       200:
 *         description: vendor exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_200'
 *       404:
 *         description: vendor does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_404'
 * 
 * /vendors/id/{id}:
 *   get:
 *     summary: Get vendor by id
 *     tags: [vendors]
 *     responses:
 *       200:
 *         description: vendor exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_200'
 *       404:
 *         description: vendor does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_id_404'
 * 
 * /vendors/name/{name}:
 *   get:
 *     summary: Get vendor by name
 *     tags: [vendors]
 *     responses:
 *       200:
 *         description: vendor exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_200'
 *       404:
 *         description: vendor does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/vendors_name_404'
 *
 *
 */

 const express = require("express");
 const vendorsRouters = express.Router();
 
 // Import Controllers
 const {
   cVendorsGetAll,
   cVendorsGetById,
   cVendorsGetByName
 } = require("../controllers/vendorsControllers");
 
 vendorsRouters.get("/", cVendorsGetAll); // Get all vendors
 vendorsRouters.get("/id/:id", cVendorsGetById); // Get vendor by id
 vendorsRouters.get("/name/:name", cVendorsGetByName); // Get vendor by name
 
 module.exports = vendorsRouters;
 