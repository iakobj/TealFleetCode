const { query } = require("../services/db/index");
const { tfdbInit } = require("../services/db/tfdbInit");

// Function to execute the CREATE TABLE queries sequentially
module.exports.utilTfdbInit = async () => {
  try {
    query(tfdbInit);
    console.log("Tables in tfdb created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};
