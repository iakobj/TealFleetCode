const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const { pool } = require("./services/db/index");

var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream'); // version 2.x


// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// setup the logger
app.use(morgan('short', { stream: accessLogStream }))

// PORT number for the express API server
const port = process.env.SERVER_PORT;

// Connecting Swagger to Node
(bodyParser = require("body-parser")),
  (swaggerJsdoc = require("swagger-jsdoc")),
  (swaggerUi = require("swagger-ui-express"));

const options = {
  definition: {
    "openapi": "3.1.0",
    "info": {
      "title": "TealFleet API",
      "summary": "Self-hosted a web app for insight into physical and virtual assets in small to mid size data-centers.",
      "description": "This is documentation for TealFleet backend API NodeJS server.",
      "contact": {
        "name": "API Support",
        "email": "support@tealfleet.com",
        "url": "https://www.tealfleet.com"
      },
      "license": {
        "name": "GNU GPLv3",
        "identifier": "GPL-3.0-or-later",
        "url": "https://spdx.org/licenses/GPL-3.0-or-later.html"
      },
      "version": "0.1.0",
    },
    servers: [
      {
        "url": process.env.SWAGGER_DOC,
        "description": "TealFleet server"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// session store and session config
const store = new (require("connect-pg-simple")(session))({
  pool,
  createTableIfMissing: true,
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: "GET,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
  session({
    name: "tealfleet",
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 3600000,
      sameSite: "none",
    },
  })
);

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// function that creates tables if they are not already created
const { utilTfdbInit } = require("./utils/utilTfdbInit");

// function that seeds demo information to the tfdb
const { utilTfdbSeed } = require("./utils/utilTfdbSeed");

// function that resets the tfdb to an empty state
const { utilTfdbReset } = require("./utils/utilTfdbReset");

// When starting the app it goes trogh this logic to determine starting options
const args = process.argv;

if (args[2] == "seed") {
  console.log("Seeding started...");
  utilTfdbSeed()
    .then(() => {
      console.log("Seeding done");
    })
    .then(() => {
      console.log(
        "Tealfleet app running with seed information populated in the tfdb"
      );
    });
} else if (args[2] == "init") {
  console.log("Init started...");
  utilTfdbInit()
    .then(() => {
      console.log("Init done");
    })
    .then(() => {
      console.log("Exiting...");
    });
  return false;
} else if (args[2] == "reset") {
  console.log("Reset started...");
  utilTfdbReset()
    .then(() => {
      console.log("Reset done");
    })
    .then(() => {
      console.log("Exiting...");
    });
  return false;
} else if (args[2] == "help") {
  console.log("node app.js [OPTION]");
  console.log(
    "  init         Creates the tables needed in the tealfleet database"
  );
  console.log("  reset        Drops all the tables in tealfleet database");
  console.log(
    "  seed         Populates the tables in the tealfleet database with seed data"
  );
  return false;
} else {
  console.log("No arguments recognized, continuing with running the app.");
}

// Express routers
const tenantsRouters = require("./routes/tenantsRouters");
const usersRouters = require("./routes/usersRouters");
const vendorsRouters = require("./routes/vendorsRouters");
const navigationRouters = require("./routes/navigationRouters");
const softwareRouters = require("./routes/softwareRouters");
const hardwareRouters = require("./routes/hardwareRouters");
const rolesRouters = require("./routes/rolesRouters");
const sitesRouters = require("./routes/sitesRouters");
const assetsRouters = require("./routes/assetsRouters");
const authRouters = require("./routes/authRouters");

app.use("/tenants", tenantsRouters);
app.use("/users", usersRouters);
app.use("/vendors", vendorsRouters);
app.use("/navigation", navigationRouters);
app.use("/software", softwareRouters);
app.use("/hardware", hardwareRouters);
app.use("/roles", rolesRouters);
app.use("/sites", sitesRouters);
app.use("/assets", assetsRouters);
app.use("/auth", authRouters);

app.listen(port, () => {
  console.log(
    `TealFleet backend listening on port ${port}, REST API Documentation http://localhost:3000/api-docs/`
  );
});
