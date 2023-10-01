const { query } = require("../services/db/index");
const { tfdbReset } = require("../services/db/tfdbReset");

// Function to execute the seedTealFleetDB queries sequentially
module.exports.utilTfdbReset = async () => {
  try {
    query(tfdbReset);
    console.log("tfdb reset successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};