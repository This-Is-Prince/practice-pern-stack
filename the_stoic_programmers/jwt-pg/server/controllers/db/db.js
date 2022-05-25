const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  port: 5432,
  user: "postgres",
  password: process.env.POSTGRESQL_PASSWORD,
  host: "localhost",
  database: "jwttutorial",
});

module.exports = pool;
