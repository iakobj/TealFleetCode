const express = require("express");
const app = express();
const port = 3000;

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
  console.log(`TealFleet backend listening on port ${port}`);
});
