/**
 * @swagger
 * components:
 *   schemas:
 *     sites_200:
 *       type: object
 *       example:
 *         site_id: 20ae5464-e9dc-496f-b8ba-d674a2a47bba,
 *         is_root: false,
 *         site_name: ACME,
 *         created_at: 2023-09-16T17:44:22.623Z
 *     sites_404:
 *       type: string
 *       example: No sites found
 *     sites_id_404:
 *       type: string
 *       example: The site was not found, invalid input syntax for type uuid 3a019320-0e16-4cfa-83de-45475b100730d
 *     sites_name_404:
 *       type: string
 *       example: The site was not found, invalid input syntax for type name ACMEs

 * tags:
 *   name: sites
 *   description: The Tealfleet managing API
 * /sites:
 *   get:
 *     summary: Get all sites
 *     tags: [sites]
 *     responses:
 *       200:
 *         description: site exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_200'
 *       404:
 *         description: site does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_404'
 * 
 * /sites/id/{id}:
 *   get:
 *     summary: Get site by id
 *     tags: [sites]
 *     responses:
 *       200:
 *         description: site exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_200'
 *       404:
 *         description: site does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_id_404'
 * 
 * /sites/name/{name}:
 *   get:
 *     summary: Get site by name
 *     tags: [sites]
 *     responses:
 *       200:
 *         description: site exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_200'
 *       404:
 *         description: site does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sites_name_404'
 *
 *
 */

const express = require("express");
const sitesRouters = express.Router();

// Import Controllers
const {
  cSitesGetAll,
  cSitesGetById,
  cSitesGetByName,
  cSitesGetByAddress,
  cSitesGetByCity,
  cSitesGetByPostcode,
  cSitesGetByCountry,
  cSitesGetByTenant,
} = require("../controllers/sitesControllers");

sitesRouters.get("/", cSitesGetAll); // Get all sites
sitesRouters.get("/id/:id", cSitesGetById); // Get site by id
sitesRouters.get("/names/:name", cSitesGetByName); // Get site by name
sitesRouters.get("/addresses/:address", cSitesGetByAddress); // Get site by address
sitesRouters.get("/cities/:city", cSitesGetByCity); // Get site by city
sitesRouters.get("/postcodes/:postcode", cSitesGetByPostcode); // Get site by post code
sitesRouters.get("/countries/:country", cSitesGetByCountry); // Get site by country
sitesRouters.get("/tenants/:tenant", cSitesGetByTenant); // Get site by tenant

module.exports = sitesRouters;
