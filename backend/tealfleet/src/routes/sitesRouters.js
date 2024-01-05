/**
 * @swagger
 * components:
 *   schemas:
 *     sites_200:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object 
 *          example:
 *            "site_id": "1a2b3c4d-5e6f-7a8b-9c0d-0123456aaaaa"
 *            "tenant_id": "111c561c-8a1d-4f79-9d3a-012345678901"
 *            "site_name": "Site 1"
 *            "site_address1": "123 Main St"
 *            "site_city": "City 1"
 *            "site_postcode": 12345
 *            "site_country": "Country 1"
 *            "site_changed_at": "2023-11-08T19:14:14.590Z"
 *            "site_created_at": "2023-11-08T19:14:14.590Z"
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
 *   description: Loctions for assets, tenants and users
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
 *     summary: Get site by site id
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_id
 *       schema:
 *         type: uuid
 *       required: true
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
 * /sites/names/{name}:
 *   get:
 *     summary: Get site by site name
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_name
 *       schema:
 *         type: string
 *       required: true
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
 * /sites/addresses/{address}:
 *   get:
 *     summary: Get site by site address
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_name
 *       schema:
 *         type: string
 *       required: true
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
 * /sites/cities/{city}:
 *   get:
 *     summary: Get site by site city
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_city
 *       schema:
 *         type: string
 *       required: true
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
 * /sites/postcodes/{postcode}:
 *   get:
 *     summary: Get site by site postcode
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_city
 *       schema:
 *         type: string
 *       required: true
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
 * /sites//countries/{country}:
 *   get:
 *     summary: Get site by site country
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: site_country
 *       schema:
 *         type: string
 *       required: true
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
 * /sites/tenants/{tenant}:
 *   get:
 *     summary: Get sites by tenant id
 *     tags: [sites]
 *     parameters:
 *     - in: path
 *       name: tenant_id
 *       schema:
 *         type: string
 *       required: true
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
 */

const express = require("express");
const sitesRouters = express.Router();

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

sitesRouters.get("/", cSitesGetAll);
sitesRouters.get("/id/:id", cSitesGetById);
sitesRouters.get("/names/:name", cSitesGetByName);
sitesRouters.get("/addresses/:address", cSitesGetByAddress);
sitesRouters.get("/cities/:city", cSitesGetByCity);
sitesRouters.get("/postcodes/:postcode", cSitesGetByPostcode);
sitesRouters.get("/countries/:country", cSitesGetByCountry);
sitesRouters.get("/tenants/:tenant", cSitesGetByTenant);

module.exports = sitesRouters;
