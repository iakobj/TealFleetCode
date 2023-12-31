/**
 * @swagger
 * components:
 *   schemas:
 *     contracts_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "role_id": "20ae5464-e9dc-496f-b8ba-d674a2a47bba"
 *            "role": "rwd"
 *            "role_name": "user"
 *     contracts_404:
 *       type: string
 *       example: No contracts found
 *     contracts_id_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     contracts_name_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: contracts
 *   description: Get contracts by id or name
 * /contracts:
 *   get:
 *     summary: Get all contracts
 *     tags: [contracts]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_404'
 * 
 * /contracts/id/{id}:
 *   get:
 *     summary: Get role by id
 *     tags: [contracts]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_id_404'
 * 
 * /contracts/types/{type}:
 *   get:
 *     summary: Get role by name
 *     tags: [contracts]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_404'
 *
 * /contracts/names/{name}:
 *   get:
 *     summary: Get role by name
 *     tags: [contracts]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contracts_name_404'
 *
 *
 */

 const express = require("express");
 const contractsRouters = express.Router();
 
 const {
    cContractsGetAll,
    cContractsGetByTenant,
    cHwContractsGetAll,
    cSwContractsGetAll,
 } = require("../controllers/contractsControllers");
 
 contractsRouters.get("/", cContractsGetAll);
 contractsRouters.get("/tenants/id/:tenant", cContractsGetByTenant);
 contractsRouters.get("/all/hw", cHwContractsGetAll);
 contractsRouters.get("/all/sw", cSwContractsGetAll);
 
 module.exports = contractsRouters;
 