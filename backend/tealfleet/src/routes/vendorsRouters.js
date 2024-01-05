/**
 * @swagger
 * components:
 *   schemas:
 *     vendors_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          example:
 *           "vendor_id": "1a2b3c4d-8b8b-8b8b-8b8b-012345678901"
 *           "vendor_name": "vmware"
 *           "vendor_image": "vendor1.jpg"
 *           "vendor_created_at": "2023-11-08T19:14:14.590Z"
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
 *     summary: Get vendor by vendor id
 *     tags: [vendors]
 *     parameters:
 *     - in: path
 *       name: vendor_id
 *       schema:
 *         type: uuid
 *       required: true
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
 * /vendors/names/{name}:
 *   get:
 *     summary: Get vendor by vendor name
 *     tags: [vendors]
 *     parameters:
 *     - in: path
 *       name: vendor_name
 *       schema:
 *         type: uuid
 *       required: true
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

const {
  cVendorsGetAll,
  cVendorsGetById,
  cVendorsGetByName,
} = require("../controllers/vendorsControllers");

vendorsRouters.get("/", cVendorsGetAll);
vendorsRouters.get("/id/:id", cVendorsGetById);
vendorsRouters.get("/names/:name", cVendorsGetByName);

module.exports = vendorsRouters;
