const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// Create express app
const app = express();
const port = 3000;
const cors = require('cors');
const { receiveMessageOnPort } = require('worker_threads');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');


app.use(cors());
app.use(express.json());

app.listen(5001, () => {
    console.log("Server is listening in on port 5001");
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

// const pizzaRouter = require('./routes/makePizza');
// app.use("/makePizza", pizzaRouter);

app.put("/checkout", async (req, res) => {
    var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Red\'') ;
    serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'House_Blend\'');
    console.log(req.body.isCauly);
    if (req.body.isCauly) {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Cauliflour\'')
    }
    else {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Dough\'')
        
    }
    console.log(req.body.numToppings);
    for (let i = 0; i < req.body.numToppings.length; i++)  {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \''+req.body.numToppings[i]+'\'');
    }
    res.json(serverReply.rows);
})

//exit gracefully
process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

module.exports = {};

// const pizzaRouter = require('./routes/makePizza');
// app.use("/makePizza", pizzaRouter);
