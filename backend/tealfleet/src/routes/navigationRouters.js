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
 *           "sub_nav_id": "2b3c4d5e-ffff-8b9c-0d3e-012345678884"
 *           "main_nav_id": "1a2b3c4d-7a8b-8b9c-0d1e-012345678882"
 *           "sub_nav_item": "Cisco"
 *           "sub_nav_path": "/fleet/cisco"
 *     navigation_404:
 *       type: string
 *       example: "No Navigation found"
 *
 * tags:
 *   name: navigation
 *   description: Main and sub navigational elements
 * /navigation/main:
 *   get:
 *     summary: Get all main navigation elements
 *     tags: [navigation]
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
 * /navigation/main/id/{id}:
 *   get:
 *     summary: Get main navigation element by main nav id
 *     tags: [navigation]
 *     parameters:
 *     - in: path
 *       name: main_nav_id
 *       schema:
 *         type: uuid
 *       required: true
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
 * /navigation/sub:
 *   get:
 *     summary: Get all sub navigation elements
 *     tags: [navigation]
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_sub_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_404'
 * 
 * /navigation/sub/id/{id}:
 *   get:
 *     summary: Get sub navigation elements where main navigation id matches
 *     tags: [navigation]
 *     parameters:
 *     - in: path
 *       name: main_nav_id
 *       schema:
 *         type: uuid
 *       required: true
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_sub_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_404'
 * 
 * /navigation/sub/names/{name}:
 *   get:
 *     summary: Get sub navigation elements where main navigation name matches
 *     tags: [navigation]
 *     parameters:
 *     - in: path
 *       name: main_nav_item
 *       schema:
 *         type: string
 *       required: true
 *     responses:
 *       200:
 *         description: navigation element exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_sub_200'
 *       404:
 *         description: navigation element does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/navigation_404'
 *
 */

const express = require("express");
const navigationRouters = express.Router();

const {
  cNavigationMainGetAll,
  cNavigationMainGetById,
  cNavigationSubGetAll,
  cNavigationSubGetById,
  cNavigationSubGetByName,
} = require("../controllers/navigationControllers");

navigationRouters.get("/main", cNavigationMainGetAll);
navigationRouters.get("/main/id/:id", cNavigationMainGetById);
navigationRouters.get("/sub", cNavigationSubGetAll);
navigationRouters.get("/sub/id/:id", cNavigationSubGetById);
navigationRouters.get("/sub/names/:name", cNavigationSubGetByName);

module.exports = navigationRouters;
