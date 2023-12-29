/**
 * @swagger
 * components:
 *   schemas:
 *     auth_200:
 *       type: object
 *       example:
 *         "user":
 *          "role_id": "1e2c561c-aaaa-4f79-9d3a-012345678901"
 *          "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *          "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *          "firstname": "John"
 *          "lastname": "Doe"
 *          "phone": "555-123-4567"
 *          "email": "john.doe@example.com"
 *          "title": "Manager"
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
 *   name: auth
 *   description: Authentication
 * /auth/login:
 *   post:
 *     summary: Log in an user
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *             email:
 *              type: string
 *             password:
 *              type: string
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
 * /auth/register:
 *   get:
 *     summary: Register the user (for successeful login the user has to be approved by tenant admin)
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

const {
  cAuthLogin,
  cAuthLogout,
  cAuthRegister,
} = require("../controllers/authControllers");

authRouters.post("/login", cAuthLogin);
authRouters.post("/logout", cAuthLogout);
authRouters.post("/register", cAuthRegister);

module.exports = authRouters;
