var pizza = {
    sauce: 'Red',
    numToppings: 4,
    toppings: ["Pepperoni", "Salami", "Mushrooms", "Bacon"],
    isCauly: true
}
// function setNumToppings() {
    
// }
// function createPizza(pizzaType) {
    
// }
// function addTopping() {

// }
// function addDrink() {

// }
updateTable()
function updateTable() {
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
    pool.connect()
        .then(client => {
            client.query('UPDATE inventory SET count = count-1 WHERE name = \''+pizza.sauce+'\'', function(err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
               
            })
            client.query('UPDATE inventory SET count = count-1 WHERE name = \'House_Blend\'', function(err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
               
            })
            if (pizza.isCauly) {
                client.query('UPDATE inventory SET count = count-1 WHERE name = \'Cauliflour\'', function(err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                   
                })
            }
            else {
                client.query('UPDATE inventory SET count = count-1 WHERE name = \'Dough\'', function(err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                   
                })
            }
            for (let i = 0; i < pizza.numToppings; i++)  {
                client.query('UPDATE inventory SET count = count-1 WHERE name = \''+pizza.toppings[i]+'\'', function(err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                   
                })
            }
            client.release()
        })
        //exit gracefully
    process.on('SIGINT', function() {
        pool.end();
        console.log('Application successfully shutdown');
        process.exit(0);
    });
    
}



