/**
 * @swagger
 * components:
 *   schemas:
 *     navigation_main_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:    
 *           "main_nav_id": "1a2b3c4d-7a8b-7a8b-9c0d-012345678881"
 *           "main_nav_item": "dashboard"
 *     navigation_sub_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:    
 *           "main_nav_id": "1a2b3c4d-7a8b-7a8b-9c0d-012345678881"
 *           "main_nav_item": "dashboard"
 *     navigation_404:
 *       type: string
 *       example: No Navigation found
 *     navigation_id_404:
 *       type: string
 *       example: The navigation element was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     navigation_name_404:
 *       type: string
 *       example: The navigation element was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: Navigation
 *   description: The Tealfleet managing API
 * /Navigation/main:
 *   get:
 *     summary: Get all main navigation items
 *     tags: [Navigation]
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_main_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_404'
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
 *               $ref: '#/components/schemas/navigation_200'
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
  cNavigationMainGetAll,
  cNavigationMainGetById,
  cNavigationSubGetAll,
  cNavigationSubGetById,
  cNavigationSubGetByName,
} = require("../controllers/navigationControllers");

navigationRouters.get("/main", cNavigationMainGetAll); // Get main navigation elements
navigationRouters.get("/main/id/:id", cNavigationMainGetById); // Get main navigation elements by id
navigationRouters.get("/sub", cNavigationSubGetAll); // Get main navigation elements
navigationRouters.get("/sub/id/:id", cNavigationSubGetById); // Get sub navigation elements where main nav id matches
navigationRouters.get("/sub/names/:name", cNavigationSubGetByName); // Get sub navigation elements where main nav name matches

module.exports = navigationRouters;
