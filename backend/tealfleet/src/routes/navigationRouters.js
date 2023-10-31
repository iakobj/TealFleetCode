/**
 * @swagger
 * components:
 *   schemas:
 *     Navigation_200:
 *       type: object
 *       example:
 *         navigation element_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         navigation element_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     Navigation_404:
 *       type: string
 *       example: No Navigation found
 *     Navigation_id_404:
 *       type: string
 *       example: The navigation element was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     Navigation_name_404:
 *       type: string
 *       example: The navigation element was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Navigation
 *   description: The Tealfleet managing API
 * /Navigation:
 *   get:
 *     summary: Get all Navigation
 *     tags: [Navigation]
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation_404'
 * 
 * /Navigation/id/{id}:
 *   get:
 *     summary: Get navigation element by id
 *     tags: [Navigation]
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation_id_404'
 * 
 *
 */

const express = require("express");
const navigationRouters = express.Router();

// Import Controllers
const {
  cNavigationGetAll,
  cNavigationGetById,
  cNavigationMainGetAll,
} = require("../controllers/navigationControllers");

navigationRouters.get("/", cNavigationGetAll); // Get all navigation element
navigationRouters.get("/id/:id", cNavigationGetById); // Get navigation element by id
navigationRouters.get("/main", cNavigationMainGetAll); // Get main navigation elements

module.exports = navigationRouters;
