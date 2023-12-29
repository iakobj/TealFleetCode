/**
 * @swagger
 * components:
 *   schemas:
 *     roles_200:
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
 *     roles_404:
 *       type: string
 *       example: No roles found
 *     roles_id_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     roles_name_404:
 *       type: string
 *       example: The role was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: roles
 *   description: Get roles by id or name
 * /roles:
 *   get:
 *     summary: Get all roles
 *     tags: [roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_404'
 * 
 * /roles/id/{id}:
 *   get:
 *     summary: Get role by id
 *     tags: [roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_id_404'
 * 
 * /roles/types/{type}:
 *   get:
 *     summary: Get role by name
 *     tags: [roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_404'
 *
 * /roles/names/{name}:
 *   get:
 *     summary: Get role by name
 *     tags: [roles]
 *     responses:
 *       200:
 *         description: Role exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_200'
 *       404:
 *         description: Role does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roles_name_404'
 *
 *
 */

const express = require("express");
const rolesRouters = express.Router();

const {
  cRolesGetAll,
  cRolesGetById,
  cRolesGetByRole,
  cRolesGetByName,
} = require("../controllers/rolesControllers");

rolesRouters.get("/", cRolesGetAll);
rolesRouters.get("/id/:id", cRolesGetById);
rolesRouters.get("/types/:type", cRolesGetByRole);
rolesRouters.get("/names/:name", cRolesGetByName);

module.exports = rolesRouters;
