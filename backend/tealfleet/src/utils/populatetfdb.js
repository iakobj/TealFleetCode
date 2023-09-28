const { query } = require("../services/db/index");
const { dummytfdb } = require("../services/db/dummytfDB");

// Function to execute the CREATE TABLE queries sequentially
module.exports.createTables = async () => {
  try {
    query(dummytfdb);
    console.log("Tables in dummytfdb created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};