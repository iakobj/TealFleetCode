/**
 * @swagger
 * components:
 *   schemas:
 *     auth_200:
 *       type: object
 *       example:
 *         "cookie": 
 *          "originalMaxAge": 3600000
 *          "expires": "2023-12-27T19:38:11.026Z"
 *          "httpOnly": true
 *          "path": "/"
 *          "sameSite": "none"
 *         "user":
 *          "role_id": "1e2c561c-aaaa-4f79-9d3a-012345678901"
 *          "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *          "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *          "firstname": "John"
 *          "lastname": "Doe"
 *          "phone": "555-123-4567"
 *          "email": "john.doe@example.com"
 *          "title": "Manager"
 *         "authenticated": true
 *     auth_403:
 *       type: object
 *       example:
 *         "message": "Login failed"
 *     auth_id_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     auth_name_404:
 *       type: string
 *       example: The user was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Auth
 *   description: Authentication
 * /auth/login:
 *   get:
 *     summary: Log in an user
 *     tags: [Auth]
 *     parameters:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: example@example.com
 *             password: password
 *     responses:
 *       200:
 *         description: Email and password exists and are correct.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_200'
 *       403:
 *         description: Email and password does not exists or are incorrect.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/auth_403'
 * 
 * /auth/logout:
 *   get:
 *     summary: Log out an user
 *     tags: [Auth]
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
 * /auth/register:
 *   get:
 *     summary: Register the user (for successeful login the user has to be approved by tenant admin)
 *     tags: [Auth]
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

authRouters.post("/login", cAuthLogin); // Log in user
authRouters.post("/logout", cAuthLogout); // Log out user
authRouters.post("/register", cAuthRegister); // Register new user

module.exports = authRouters;
