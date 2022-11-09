const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// Create express app
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is listening in on port 3001");
})

//Make the pool for later use
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

const pizzaRouter = require('./routes/makePizza');
app.use("/makePizza", pizzaRouter);

app.put("/checkout", async (req, res) => {
    var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \''+pizza.sauce+'\'', function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
       
    })
    var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'House_Blend\'', function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
       
    })
    if (pizza.isCauly) {
        var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Cauliflour\'', function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
           
        })
    }
    else {
        var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Dough\'', function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
           
        })
    }
    for (let i = 0; i < pizza.numToppings; i++)  {
        var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \''+pizza.toppings[i]+'\'', function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
           
        })
    }
});

//exit gracefully
process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

module.exports = {};

// const pizzaRouter = require('./routes/makePizza');
// app.use("/makePizza", pizzaRouter);
