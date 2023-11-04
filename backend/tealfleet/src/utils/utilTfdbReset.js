const { query } = require("../services/db/index");
const { tfdbReset } = require("../services/db/tfdbReset");

// Function to execute the seedTealFleetDB queries sequentially
module.exports.utilTfdbReset = async () => {
  try {
    await query(tfdbReset);
    console.log("tfdb reset in progress...");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};