const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// Create express app
const app = express();
const port = 3000;
const cors = require('cors');
const { receiveMessageOnPort } = require('worker_threads');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');
const { json } = require('stream/consumers');
const { Console } = require('console');


app.use(cors());
app.use(express.json());

app.listen(5001, () => {
    console.log("Server is listening in on port 5001");
})

let pizza = {
    pizzaName: "",
    sauce: 'Red',
    drinkName: "",
    numToppings: 0,
    currToppings: 0,
    toppings: [],
    isCauly: false,
    isCombo: false
}

var pizzaList = [];

app.get('/createPizza/:numToppings/:pizzaName', function (req, res) {
    newPizzaName = JSON.stringify(req.params.pizzaName);
    newNumToppings = JSON.parse(JSON.stringify(req.params.numToppings));
    pizza.pizzaName = newPizzaName;
    pizza.numToppings = newNumToppings;
    console.log("made it here");
    res.json("");
});

app.get('/createSetPizza/:numToppings/:pizzaName', function (req, res) {
    newPizzaName = JSON.stringify(req.params.pizzaName);
    newNumToppings = JSON.stringify(req.params.numToppings);
    pizza.pizzaName = newPizzaName;
    pizza.numToppings = 1;
    console.log(pizza.pizzaName)
    pizzaList.push(pizza);
    res.json("");
});

app.get('/addTopping/:toppingName', function (req, res) {
    console.log("hi");
    if (pizza.currToppings == pizza.numToppings) {
        res.json(false);
    }
    pizza.toppings.push(JSON.stringify(req.params.toppingName));
    console.log(pizza.toppings[0]);
    pizza.currToppings++;
    res.json(true);
});

app.get('/removeLastTopping', function (req, res) {
    pizza.toppings.pop();
    res.json(true);
});

app.get('/addToOrder', function (req, res) {
    pizzaList.push(pizza);
    numPizzas++;
    refreshPizza();
    res.json(true);
});

// app.post('/addSauce', function (req, res) {
//     pizza.sauce = main.body.newSauce;
// });
// app.post('/crustType', function (req, res) {
//     //TODO, make sure this is toggleable
//     pizza.isCauly = caulyCrust;
// });
// function comboMeal(drinkCombo) {
//     pizza.isCombo = drinkCombo;
// }

app.get('/calculatePrice', function (req, res) {
    var price = 0;
    for (let i = 0; i < pizzaList.length; i++) {
        var currentPizza = pizzaList[i];
        if (currentPizza.numToppings == -1) {
            price += 2.45;
        }
        else if (currentPizza.numToppings == 0 || (currentPizza.numToppings == 1 && currentPizza.toppings[0] == 'Pepperoni')) {
            if (currentPizza.isCombo) {
                price += 7.99;
            }
            else {
                price += 6.79;
            }
        }
        else if (currentPizza.numToppings == 1) {
            if (currentPizza.isCombo) {
                price += 10.24;
            }
            else {
                price += 7.79;
            }
        }
        else {
            if (currentPizza.isCombo) {
                price += 11.44;
            }
            else {
                price += 8.99;
            }
        }
        if (currentPizza.isCauly) {
            price += 2.99;
        }
    }
    //CHECK: might have to stringify this
    res.json(price);
});

app.get('/cancelOrder', function (req, res) {
    pizza.pizzaName = "";
    pizza.sauce = '';
    pizza.drinkName = "";
    pizza.numToppings = 0;
    pizza.currToppings = 0;
    pizza.toppings = [];
    pizza.isCauly = false;
    pizza.isCombo = false;
    pizzaList = [];
    numDrinks = 0;
    numPizzas = 0;
});
app.get('/clearSelection', function (req, res) {
    pizzaList.pop();
});

app.get('/deletePizza', function (req, res) {
    pizza.pizzaName = "";
    pizza.sauce = 'Red';
    pizza.drinkName = "";
    pizza.numToppings = 0;
    pizza.currToppings = 0;
    pizza.toppings = [];
    pizza.isCauly = false;
    pizza.isCombo = false;
});

function refreshPizza() {
    pizza.pizzaName = "";
    pizza.sauce = 'Red';
    pizza.drinkName = "";
    pizza.numToppings = 0;
    pizza.currToppings = 0;
    pizza.toppings = [];
    pizza.isCauly = false;
    pizza.isCombo = false;
}

app.get('/checkoutScreen', function (req, res) {
    let completeOrder = 'Order Info: \n';
    for (let i = 0; i < pizzaList.length(); i++) {
        completeOrder += pizza.name;
        completeOrder += "- ";
        for (let j = 0; i < pizza.toppings.length(); j++) {
            completeOrder += pizza.toppings[j];
            completeOrder += " ";
        }
        completeOrder += ("\n");
    }
    //MIGHT have to stringify this
    res.json(completeOrder)
});



//Make the pool for later use
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: { rejectUnauthorized: false }
});

app.put("/checkoutServ", async (req, res) => {
    console.log("Im getting here");
    var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Red\'');
    serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'House_Blend\'');
    if (pizza.isCauly) {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Cauliflour\'')
    }
    else {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Dough\'')

    }
    console.log(pizzaList[0].toppings[0]);
    console.log(pizza.pizzaName);
    // console.log(req.body.numToppings);
    for (let i = 0; i < pizzaList.length; i++) {
        for (let j = 0; j < pizzaList[i].toppings.length; j++)
            serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'' + pizzaList[i].toppings[j] + '\'');
    }
    res.json(serverReply.rows);
})

app.get("/seasonalMenu", async (req, res) => {
    var seasonalReply = await pool.query('SELECT * FROM INVENTORY WHERE id > 48');
    return res.json(seasonalReply.rows);
})

//exit gracefully
process.on('SIGINT', function () {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

module.exports = {};


// //Black magic API testing
function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: { lat: 30.61234195012257, lng: -96.34153287461642 },
    });
    directionsRenderer.setMap(map);
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var request = {
        origin: start,
        destination: { lat: 30.61234195012257, lng: -96.34153287461642 },
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}
