const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

const path = require("path");
const result = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
if (result.error) {
  console.error("Error loading .env file:", result.error);
}

// PORT number for the express API server
const port = process.env.SERVER_PORT;

// Connecting Swagger to Node
(bodyParser = require("body-parser")),
  (swaggerJsdoc = require("swagger-jsdoc")),
  (swaggerUi = require("swagger-ui-express"));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "TealFleet API",
      version: "0.1.0",
    },
    servers: [
      {
        url: process.env.SWAGGER_DOC,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// session store and session config
const store = new (require("connect-pg-simple")(session))({
  createTableIfMissing: true,
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
  session({
    name: "tealfleet.com",
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

const args = process.argv;

if (args[2] == "seed") {
  console.log("Seeding started...");
  utilTfdbSeed();
} else if (args[2] == "init") {
  console.log("Init started...");
  utilTfdbInit();
  return false;
} else if (args[2] == "reset") {
  console.log("Reseting started...");
  utilTfdbReset();
  return false;
} else if (args[2] == "help") {
  console.log(
    "node app.js init  // it creates the tables needed in the tealfleet database"
  );
  console.log(
    "node app.js reset  // it drops all the tables tealfleet database"
  );
  console.log(
    "node app.js seed  // populates the tables in the tealfleet database with demo/test rows"
  );
  return false;
} else {
  console.log("No arguments recognized, continuing with running the app.");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Express routers
const tenantsRouters = require("./routes/tenantsRouters");
const usersRouters = require("./routes/usersRouters");
const vendorsRouters = require("./routes/vendorsRouters");
const navigationRouters = require("./routes/navigationRouters");
const softwareRouters = require("./routes/softwareRouters");
const hardwareRouters = require("./routes/hardwareRouters");
const rolesRouters = require("./routes/rolesRouters");
const sitesRouters = require("./routes/sitesRouters");

app.use("/tenants", tenantsRouters);
app.use("/users", usersRouters);
app.use("/vendors", vendorsRouters);
app.use("/navigation", navigationRouters);
app.use("/software", softwareRouters);
app.use("/hardware", hardwareRouters);
app.use("/roles", rolesRouters);
app.use("/sites", sitesRouters);

app.listen(port, () => {
  console.log(
    `TealFleet backend listening on port ${port}, REST API DOC http://localhost:3000/api-docs/`
  );
});
