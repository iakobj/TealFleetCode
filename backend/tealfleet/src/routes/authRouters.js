/**
 * @swagger
 * components:
 *   schemas:
 *     auth_200:
 *       type: object
 *       example:
 *         user_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         user_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     auth_404:
 *       type: string
 *       example: No auth found
 *     auth_id_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     auth_name_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: auth
 *   description: The Tealfleet managing API
 * /auth:
 *   get:
 *     summary: Get all auth
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_404'
 * 
 * /auth/id/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_id_404'
 * 
 * /auth/name/{name}:
 *   get:
 *     summary: Get user by name
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: user exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_200'
 *       404:
 *         description: user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_name_404'
 *
 *
 */

const express = require("express");
const authRouters = express.Router();
const bodyParser = require('body-parser');

authRouters.use(express.urlencoded({extended: false}));
authRouters.use(bodyParser.json());

// Import Controllers
const {
  cAuthLogin,
  cAuthLogout,
  cAuthRegister,
} = require("../controllers/authControllers");

authRouters.post("/login", cAuthLogin); // Login user
authRouters.post("/logout", cAuthLogout); // Log out user
authRouters.post("/register", cAuthRegister); // Register new user

module.exports = authRouters;
