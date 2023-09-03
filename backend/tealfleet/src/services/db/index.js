const { Pool } = require("pg");

const path = require("path");
const result = require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env"),
});

if (result.error) {
  console.error("Error loading .env file:", result.error);
}
// The pool is initially created empty and will create new clients lazily as they are needed.
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_NAME,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

/*
    text: The SQL query string.
    params: An array of query parameters or an object with named parameters. 
        This is used for safe parameterized queries to prevent SQL injection.
    callback: A callback function to handle the query result or error. 
        It follows the common Node.js callback pattern, where the first parameter
        is an error object (or null if no error occurred), and the second parameter 
        is the result of the query.
*/
module.exports.query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports.pool = pool;
