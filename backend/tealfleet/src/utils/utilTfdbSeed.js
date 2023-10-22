const { query } = require("../services/db/index");
const { tfdbSeed } = require("../services/db/tfdbSeed");

// Function to execute the seedTealFleetDB queries sequentially
module.exports.utilTfdbSeed = async () => {
  try {
    await query(tfdbSeed);
    console.log("Seed data in tfdb created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};