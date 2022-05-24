const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.POSTGRESQL_PASSWORD,
  host: "localhost",
  database: "pernstack",
  port: 5432,
});

module.exports = pool;
