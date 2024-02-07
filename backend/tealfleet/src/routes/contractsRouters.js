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
 *            "sw_asset_contract_id": "1a2b3c4d-5e6f-7a8b-9c0d-012345678901"
 *            "software_asset_id": "1a2b3c4d-b8b8-a8a8-a1a8-012345678901"
 *            "contract_id": "1a2b3c4d-cccc-cccc-cccc-012345678901"
 *            "sw_created_at": "2023-11-08T19:14:14.590Z"
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "contract_type_id": "1e2c561c-cccc-1111-cc11-012345678901"
 *            "contractor_name": "VMware support"
 *            "contract_no": "Contract123"
 *            "contract_description": "Contract Description 1"
 *            "contract_valid_from": "2023-12-14"
 *            "contract_valid_to": "2023-12-31"
 *            "contract_changed_at": "2023-11-08T19:14:14.590Z"
 *            "contract_created_at": "2023-11-08T19:14:14.590Z"
 *            "software_catalog_id": "1a2b3c4d-5e6f-caca-caca-000045678901"
 *            "hardware_asset_id": null
 *            "software_asset_name": "hq-vbr01.acme.com"
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "software_changed_at": "2023-11-08T19:14:14.590Z"
 *            "software_created_at": "2023-11-08T19:14:14.590Z"
 *            "contract_valid": "false"
 *     contracts_404:
 *       type: string
 *       example: No contracts found
 *     contracts_id_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     contracts_name_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type name ACMEs
 * 
 * tags:
 *   name: contracts
 *   description: Contracts and related contract information
 * 
 * /contracts/numbers:
 *   get:
 *     summary: Get number of all contracts
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
 *
 *
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
    cContractsGetAllNo,
    cContractsGetByTenant,
    cHwContractsGetAll,
    cSwContractsGetAll,
    cContractsGetByContractNo,
    cHwContractsGetNo,
    cSwContractsGetNo,
 } = require("../controllers/contractsControllers");
 
 contractsRouters.get("/", cContractsGetAll);
 contractsRouters.get("/numbers", cContractsGetAllNo);
 contractsRouters.get("/tenant/:tenant", cContractsGetByTenant);
 contractsRouters.get("/all/hardware", cHwContractsGetAll);
 contractsRouters.get("/all/software", cSwContractsGetAll);
 
 contractsRouters.get("/numbers/hardware", cHwContractsGetNo);
 contractsRouters.get("/numbers/software", cSwContractsGetNo);

 contractsRouters.get("/numbers/:contract_no", cContractsGetByContractNo);
 
 module.exports = contractsRouters;
 