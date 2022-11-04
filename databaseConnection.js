//Declare pool, dotenv
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const port = 3000;
// Create pool
console.log(process.env.PSQL_USER);
//using info from.env
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

//table to store data
let sqlTable = []
pool
    .connect()
    .then(client => {
        return client
        .query('SELECT * FROM customerinfo')
        .then(data => {

            client.release()
            console.log(data.rows[0])
            for (let i = 0; i < 6; i++) {
                console.log(data.rows[i])
              } 
            
        })
        .catch(err => {
            client.release()
            console.log(err.stack)
        })
    })

//exit gracefully
process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});
    
