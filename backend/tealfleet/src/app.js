const express = require("express");
const app = express();

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
      title: "TealFleet Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a TealFleet CRUD API application made with Express and documented with Swagger",
      license: {
        name: "None",
        url: "None",
      },
      contact: {
        name: "TealFleet",
        url: "https://tealfleet.com",
        email: "info@tealfleet.com",
      },
    },
    servers: [
      {
        url: process.env.SWAGGER_DOC,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// function that creates tables if they are not already created
const { createTables } = require("./utils/init");

createTables();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Express routers
const tenantsRouter = require("./routes/tenantsRouter");

app.use("/tenants", tenantsRouter);

app.listen(port, () => {
  console.log(
    `TealFleet backend listening on port ${port}, REST API DOC http://localhost:3000/api-docs/`
  );
});
