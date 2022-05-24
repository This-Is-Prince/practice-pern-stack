const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "PostgreSQL02Prince09@2000",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
