var pizza = {
    pizzaName: "",
    sauce: 'Red',
    numToppings: 0,
    toppings: [],
    isCauly: false,
    isCombo: false
}
var pizzaList = []

var numDrinks = 0;
function createPizza(name, pizzaType) {
    pizza.pizzaName = name
    pizza.numToppings = pizzaType    
}
function addTopping(sauce, caulyCrust, drinkCombo, toppingsList) {
    pizza.sauce = sauce;
    pizza.isCauly = caulyCrust;
    pizza.isCombo = drinkCombo;
    for (let i = 0; i < numToppings; i++) {
        pizza.numToppings.push(toppingsList[i])
    }
    pizzaList.push(pizza);
    numPizzas++;
}
function addDrink() {
    numDrinks++
}
function calculatePrice() {
    var price = 0
    for (let i = 0; i < pizzaList.length(); i++) {
        var currentPizza = pizzaList[i];
        if (currentPizza.numToppings == 0 || (currentPizza.numToppings == 1 && currentPizza.toppings[0] == 'Pepperoni')) {
            if (currentPizza.isCombo) {
                price += 7.99
            }
            else {
                price += 6.79
            }
        }
        else if (currentPizza.numToppings == 1) {
            if (currentPizza.isCombo) {
                price += 10.24
            }
            else {
                price += 7.79
            }
        }
        else {
            if (currentPizza.isCombo) {
                price += 11.44
            }
            else {
                price += 8.99
            }
        }
        if (currentPizza.isCauly) {
            price += 2.99
        }
    }
    return price;
}

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



