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
const usersRouter = require("./routes/usersRouter");
const vendorsRouter = require("./routes/vendorsRouter");

app.use("/tenants", tenantsRouter);
app.use("/users", usersRouter);
app.use("/vendors", vendorsRouter);

app.listen(port, () => {
  console.log(
    `TealFleet backend listening on port ${port}, REST API DOC http://localhost:3000/api-docs/`
  );
});
