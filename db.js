const Pool = require("pg").Pool
require('dotenv').config()
const pool = new Pool({
    user: "postgres",
    password: process.env.password,
    database: "global_corporate_campus",
    host: "localhost",
    port: 5432
})

module.exports = pool