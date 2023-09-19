const { query } = require("../services/db/index");
const { tfdb } = require("../services/db/TealFleetDB");

// Function to execute the CREATE TABLE queries sequentially
module.exports.createTables = async () => {
  try {
    query(tfdb);
    console.log("Tables in tfdb created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};
