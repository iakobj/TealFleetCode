/**
 * @swagger
 * components:
 *   schemas:
 *     users_200:
 *       type: object
 *       example:
 *         user_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         user_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
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
 * /users/name/{name}:
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
 *
 */

const express = require("express");
const usersRouter = express.Router();

// Import Controllers
const {
  cUsersGetAll,
  cUsersGetById,
  cUsersGetByName,
  cUsersGetByEmail,
  cUsersGetByPhone,
  cUsersGetByTitle,
} = require("../controllers/usersControllers");

usersRouter.get("/", cUsersGetAll); // Get all users
usersRouter.get("/id/:id", cUsersGetById); // Get user by id
usersRouter.get("/name/:name", cUsersGetByName); // Get user by name
usersRouter.get("/email/:email", cUsersGetByEmail); // Get user by email
usersRouter.get("/phone/:phone", cUsersGetByPhone); // Get user by phone
usersRouter.get("/title/:title", cUsersGetByTitle); // Get user by title

module.exports = usersRouter;
