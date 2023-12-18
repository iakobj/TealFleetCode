/**
 * @swagger
 * components:
 *   schemas:
 *     Roles_200:
 *       type: object
 *       example:
 *         Role_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         Role_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     Roles_404:
 *       type: string
 *       example: No Roles found
 *     Roles_id_404:
 *       type: string
 *       example: The Role was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     Roles_name_404:
 *       type: string
 *       example: The Role was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Roles
 *   description: The Tealfleet managing API
 * /Roles:
 *   get:
 *     summary: Get all Roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_404'
 * 
 * /Roles/id/{id}:
 *   get:
 *     summary: Get Role by id
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_id_404'
 * 
 * /Roles/name/{name}:
 *   get:
 *     summary: Get Role by name
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles_name_404'
 *
 *
 */

const express = require("express");
const rolesRouters = express.Router();

// Import Controllers
const {
  cRolesGetAll,
  cRolesGetById,
  cRolesGetByRole,
  cRolesGetByName,
} = require("../controllers/rolesControllers");

rolesRouters.get("/", cRolesGetAll); // Get all Roles
rolesRouters.get("/id/:id", cRolesGetById); // Get Role by id
rolesRouters.get("/roles/:role", cRolesGetByRole); // Get Role by role
rolesRouters.get("/names/:name", cRolesGetByName); // Get Role by role name

module.exports = rolesRouters;
