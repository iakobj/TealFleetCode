/**
 * @swagger
 * components:
 *   schemas:
 *     users_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          example:
 *            "user_id": "1a2b3c4d-1111-7a8b-9c0d-012345678901"
 *            "role_id": "1e2c561c-aaaa-4f79-9d3a-012345678901"
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "first_name": "John"
 *            "last_name": "Doe"
 *            "email": "john.doe@example.com"
 *            "phone": "555-123-4567"
 *            "title": "Manager"
 *            "view_dashboard": true
 *            "view_fleet": true
 *            "view_support": true
 *            "view_administration": true
 *            "created_at": "2023-11-08T19:14:14.590Z"
 *     users_404:
 *       type: string
 *       example: No users found
 *     users_id_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     users_name_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: users
 *   description: The Tealfleet managing API
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_404'
 * 
 * /users/id/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_id_404'
 * 
 * /users/names/{name}:
 *   get:
 *     summary: Get user by name
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_name_404'
 *
 * /users/emails/{email}:
 *   get:
 *     summary: Get user by email
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_name_404'
 * 
 * /users/phones/{phone}:
 *   get:
 *     summary: Get user by phone number
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_name_404'
 * 
 * /users/titles/{title}:
 *   get:
 *     summary: Get user by title
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_name_404'
 * 
 * /users/roles/{role}:
 *   get:
 *     summary: Get user by role name
 *     tags: [users]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users_name_404'
 * 
 */

const express = require("express");
const usersRouters = express.Router();

const {
  cUsersGetAll,
  cUsersGetById,
  cUsersGetByName,
  cUsersGetByEmail,
  cUsersGetByPhone,
  cUsersGetByTitle,
  cUsersGetByRole,
} = require("../controllers/usersControllers");

usersRouters.get("/", cUsersGetAll);
usersRouters.get("/id/:id", cUsersGetById);
usersRouters.get("/names/:name", cUsersGetByName);
usersRouters.get("/emails/:email", cUsersGetByEmail);
usersRouters.get("/phones/:phone", cUsersGetByPhone);
usersRouters.get("/titles/:title", cUsersGetByTitle);
usersRouters.get("/roles/:role", cUsersGetByRole);

module.exports = usersRouters;
