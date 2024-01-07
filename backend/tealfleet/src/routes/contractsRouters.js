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
 *            "contract_id": "1a2b3c4d-cccc-cccc-cccc-012345678901"
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "contract_type_id": "1e2c561c-cccc-1111-cc11-012345678901"
 *            "contractor_name": "VMware"
 *            "contract_no": "Contract123"
 *            "contract_description": "Contract Description 1"
 *            "contract_valid_from": "2022-12-31T23:00:00.000Z"
 *            "contract_valid_to": "2023-12-30T23:00:00.000Z"
 *            "contract_changed_at": "2023-11-08T19:14:14.590Z"
 *            "contract_created_at": "2023-11-08T19:14:14.590Z"
 *            "is_root": true
 *            "tenant_name": "ACME Corporation"
 *            "created_at": "2023-11-08T19:14:14.590Z"
 *            "type": "Contract Type 1"
 *            "description": "Contract Type Description 1"
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
 *   description: Contracts and related contract information
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
 * /contracts/tenant/{tenant}:
 *   get:
 *     summary: Get contracts by tenant id
 *     tags: [contracts]
 *     parameters:
 *     - in: path
 *       name: tenant_id
 *       schema:
 *         type: uuid
 *       required: true
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
 * /contracts/numbers/{contract_no}:
 *   get:
 *     summary: Get all contracts by contract number
 *     tags: [contracts]
 *     parameters:
 *     - in: path
 *       name: contract_no
 *       schema:
 *         type: string
 *       required: true
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
 * /contracts/all/hardware:
 *   get:
 *     summary: Get all hardware contracts
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
 * /contracts/all/software:
 *   get:
 *     summary: Get all software contracts
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
    cContractsGetByContractNo
 } = require("../controllers/contractsControllers");
 
 contractsRouters.get("/", cContractsGetAll);
 contractsRouters.get("/tenant/:tenant", cContractsGetByTenant);
 contractsRouters.get("/numbers/:contract_no", cContractsGetByContractNo);
 contractsRouters.get("/all/hardware", cHwContractsGetAll);
 contractsRouters.get("/all/software", cSwContractsGetAll);
 
 module.exports = contractsRouters;
 