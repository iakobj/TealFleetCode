const { query, pool } = require("../services/db/index");
const { tfdb } = require("../services/db/TealFleetDB");

// Function to execute the CREATE TABLE queries sequentially
module.exports.createTables = async () => {
  try {
    await query(tfdb);
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    pool.end(); // Close the database connection when done
  }
};
