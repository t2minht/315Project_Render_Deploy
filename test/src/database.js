const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
// Create express app
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(5001, () => {
    console.log("server has started on port 5001");
})

// Create pool
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});
const menuCols = ["ID", "Name", "Price"]
const inventoryCols = ["ID", "Name", "Item Type", "Count", "Cost", "Total Sales"]
const inventory = []
const menu = []
const transactionHistory = []
const salesTogether1 = []
const drinks = []

app.get("/inventory", async (req, res) => {
    let inv = await pool.query('SELECT * FROM inventory');
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/employeeReport", async (req, res) => {
    let inv = await pool.query('SELECT * FROM employee ORDER BY totalsales DESC');
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/id/:x", async (req, res) => {
    let inv = await pool.query('SELECT * FROM inventory WHERE id = ' + req.params.x);
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/drinks/:itemName", async (req, res) => {
    let inv = await pool.query("SELECT id FROM drinks WHERE drinkname = '" + req.params.itemName + "'");
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/pizza/:itemName", async (req, res) => {

    let inv = await pool.query("SELECT id FROM pizza WHERE pizzaname = '" + req.params.itemName.replace("_", " ") + "'");
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/menu", async (req, res) => {
    let inv = await pool.query('SELECT * FROM menu');
    res.json(inv.rows);
    
});

app.get("/restockReport", async (req, res) => {
    let inv = await pool.query('SELECT * FROM inventory WHERE count < 100');
    res.json(inv.rows);
    
});

app.get("/excessReport/:beginDate/:endDate", async (req, res) => {
    //console.log(req.params);
    let inv = await pool.query("SELECT id FROM customerinfo WHERE orderdate BETWEEN '" + req.params.beginDate + "' and '" + req.params.endDate + "'");
    res.json(inv.rows);
    
});


app.post("/addIngredient", async (req, res) => {
    console.log(inventory.length);
    let inv = await pool.query("INSERT INTO inventory VALUES (" + req.body.num + ", '"+ req.body.name + "', " + "'Seasonal', " + req.body.count + ", " + req.body.cost + ", 0)");
    res.json(inv.rows[0]);
    
});
//TODO: GATHER TEXT INPUTS FOR ADDING MENU ITEMS TO THE MENU, ITEMS TO INVENTORY, AND SEASONAL ITEMS, AND TO CHANGE PRICE


app.post("/addItem", async (req, res) => {
    let inv = await pool.query("INSERT INTO menu VALUES(" + req.body.id+ ",'" + req.body.name + "',"+ req.body.price +")");
    res.json(inv.rows[0]);
    
});

app.put("/updatePrice", async (req, res) => {
    let inv = await pool.query("UPDATE menu SET price = " + req.body.newPrice + " WHERE id =" + req.body.id);
    res.json(inv.rows[0]);
    
});

app.put("/updateAmount", async (req, res) => {
    var id1 = req.body.id;
    var newAmount = req.body.newAmount;
    let inv = await pool.query("UPDATE inventory SET count = count+" + newAmount + " WHERE id ="
    + id1 + "RETURNING *");
    res.json(inv.rows[0]);
    
});

app.get("/salesTogether/:beginDate/:endDate", async (req, res) => {
    let inv = await pool.query("SELECT customerinfo.id,customerinfo.orderdate,pizza.pizzaname,drinks.drinkname FROM customerinfo INNER JOIN drinks ON customerinfo.id=drinks.id INNER JOIN pizza ON customerinfo.id=pizza.id WHERE orderdate BETWEEN '" + req.params.beginDate + "' and '" + req.params.endDate + "'");
    res.json(inv.rows);
    
});

let pizza = {
    pizzaName: "",
    sauce: 'Red',
    drinkName: "",
    numToppings: 0,
    currToppings: 0,
    toppings: [],
    isCauly: "false",
    isCombo: "false",
    price: 0
}

var pizzaList = [];
var numDrinks = 0;

app.get('/currentToppings', function (req, res) {
    var allToppings = "";
    for (let i = 0; i < pizza.currToppings; i++) {
        allToppings += pizza.toppings[i];
        allToppings += ",";
    }
    res.json(allToppings);
});

app.get('/createPizza/:numToppings/:pizzaName', function (req, res) {
    newPizzaName = req.params.pizzaName;
    pizza.pizzaName = newPizzaName;
    pizza.numToppings = req.params.numToppings;
    if (pizza.price == 0) {
        if (pizza.numToppings == 0 || pizza.numToppings == 1) {
            pizza.price += 6.79;
        } else {
            pizza.price += 8.99;
        }
    }
    console.log(pizza.pizzaName);
    res.json(JSON.stringify(true));
});

app.get('/createSetPizza/:numToppings/:pizzaName', function (req, res) {
    console.log("CreatingPizza")
    newPizzaName = JSON.stringify(req.params.pizzaName);
    pizza.pizzaName = newPizzaName;
    pizza.numToppings = req.params.numToppings;
    pizza.price = 6.79;
    if (req.params.numToppings == "1") {
        pizza.toppings.push("Pepperoni");
    }
    console.log(pizza.toppings[0]);
    const pushPizza = structuredClone(pizza);
    pizzaList.push(pushPizza);
    refreshPizza();
    res.json(JSON.stringify(true));
});

app.get('/addTopping/:toppingName', function (req, res) {

    if (pizza.currToppings == pizza.numToppings) {
        console.log("false");
        res.json("false");
    } else if (pizza.numToppings == 1 && req.params.toppingName == 'Pepperoni') {
        pizza.toppings.push(req.params.toppingName);
        pizza.currToppings++;
        pizza.price = 6.79
        res.json("true");
    }
    else if (pizza.numToppings == 1) {
        if (req.params.toppingName.length == 0) {
            pizza.price = 6.79;
            res.json("true");
        }
        pizza.price = 7.79;
        pizza.toppings.push(req.params.toppingName);
        pizza.currToppings++;
        res.json("true");
    }
    else {
        pizza.toppings.push(req.params.toppingName);
        pizza.currToppings++;
        res.json("true");
    }
});

app.get('/removeLastTopping', function (req, res) {
    if (pizza.currToppings != 0) {
        pizza.currToppings--;
        pizza.toppings.pop();
        if (pizza.numToppings == 1 || pizza.numToppings == 0) {
            pizza.price = 6.79;
        }

    }
    res.json(JSON.stringify(true));
});

app.get('/addToOrder', function (req, res) {
    const pushPizza = structuredClone(pizza);
    if (pizza.pizzaName != "") {
        pizzaList.push(pushPizza);
        refreshPizza();
    }
    res.json(JSON.stringify(true));
});

app.get('/addSauce/:sauceName', function (req, res) {
    pizza.sauce = req.params.sauceName;
    console.log(pizza.sauce);
    res.json(JSON.stringify(true));
});

app.get('/crustType/:crustToggle', function (req, res) {
    pizza.isCauly = req.params.crustToggle;
    res.json(JSON.stringify(true));
});

app.get('/comboMeal/:thisCombo', function (req, res) {
    pizza.isCombo = req.params.thisCombo;
    res.json("true");
});

app.get("/soloDrink", function (req, res) {
    numDrinks++;
    res.json("true");
});

app.get('/calculatePrice', function (req, res) {
    var price = 0;
    for (let i = 0; i < pizzaList.length; i++) {
        var currentPizza = pizzaList[i];
        if (currentPizza.numToppings == -1) {
            price += 2.45;
        }
        else if (currentPizza.numToppings == 0 || (currentPizza.numToppings == 1 && currentPizza.toppings[0] == 'Pepperoni')
            || (currentPizza.numToppings == 1 && currentPizza.toppings.length == 0)) {
            if (currentPizza.isCombo == "true") {
                price += 7.99;
            }
            else {
                price += 6.79;
            }
        }
        else if (currentPizza.numToppings == 1) {
            if (currentPizza.isCombo == "true") {
                price += 10.24;
            }
            else {
                price += 7.79;
            }
        }
        else {
            if (currentPizza.isCombo == "true") {
                price += 11.44;
            }
            else {
                price += 8.99;
            }
        }
        if (currentPizza.isCauly == "true") {
            price += 2.99;
        }
    }
    price += (numDrinks * 2.45);
    price = price.toFixed(2);
    res.json(price);
});

app.get('/cancelOrder', function (req, res) {
    refreshPizza();
    pizzaList = [];
    numDrinks = 0;
    res.json(true);
});
app.get('/clearSelection', function (req, res) {
    pizzaList.pop();
    res.json(true);
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
    pizza.price = 0;
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
    pizza.price = 0;
}

app.get('/checkoutScreen', function (req, res) {
    var completeOrder = "";
    completeOrder += "Order Info: ";
    for (let i = 0; i < pizzaList.length; i++) {
        tempPizza = pizzaList[i]
        completeOrder += "~Pizza Type: " + tempPizza.pizzaName;
        let price = tempPizza.price
        if (tempPizza.isCombo == "true") {
            completeOrder += "~With added fountain drink"
            if (tempPizza.numToppings == 1 && tempPizza.toppings[0] == "Pepperoni" || tempPizza.numToppings == 1 && tempPizza.toppings.length == 0) {
                price += 1.20
            }
            else {
                price += 2.45
            }
        }
        for (let j = -1; j < tempPizza.toppings.length; j++) {
            if (j == -1) {
                completeOrder = completeOrder + "~Sauce: " + tempPizza.sauce + "~Cheese: House Blend "
                if (tempPizza.isCauly == "true") {
                    completeOrder += "~Crust: Cauliflower ";
                }
                else {
                    completeOrder += "~Crust: Standard Dough ";
                }
                completeOrder += "~Toppings: "
            } else {
                completeOrder += tempPizza.toppings[j];
            }
            completeOrder += " ";
        }


        if (tempPizza.isCauly == "true") {
            price += 2.99;
        }

        completeOrder += ("~Price: $");
        price = price.toFixed(2);
        completeOrder += price;

    }

    if (numDrinks > 0) {
        completeOrder += "~" + numDrinks + " Added Fountain Drinks: "
        let price = (numDrinks * 2.45);
        price = price.toFixed(2);
        completeOrder += String(price) + " total";
    }
    //MIGHT have to stringify this
    res.json(completeOrder)
});

app.get('/currentPizza', function (req, res) {
    let thisPizza = 'Pizza Info: ';
    makePizza = pizza;
    thisPizza += makePizza.pizzaName;
    thisPizza += " ";
    thisPizza = thisPizza + " Sauce: " + makePizza.sauce + " ";
    if (makePizza.isCauly == "true") {
        thisPizza += "Crust: Cauliflower ";
    }
    else {
        thisPizza += "Crust: Standard Dough ";
    }
    thisPizza += "Toppings: House Blend Cheese, "
    for (let i = 0; i < makePizza.currToppings; i++) {
        thisPizza = thisPizza + makePizza.toppings[i] + " ";
    }
    thisPizza += " | "
    var price = makePizza.price;
    if (makePizza.isCauly == "true") {
        price += 2.99;
    }
    if (makePizza.isCombo == "true") {
        thisPizza += " With Added Fountain Drink. | "
        if (makePizza.numToppings == 0 || (makePizza.numToppings == 1 && makePizza.toppings[0] == "Pepperoni") ||
            (makePizza.toppings.length == 0 && makePizza.numToppings == 1)) {
            price += 1.20;
        }
        else {
            price += 2.45;
        }
    }

    thisPizza += ("Price: $");
    price = price.toFixed(2);
    thisPizza += price;
    res.json(thisPizza);
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

    var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'House_Blend\'');
    if (pizza.isCauly) {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Cauliflour\'')
    }
    else {
        serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'Dough\'')
    }
    // console.log(req.body.numToppings);
    for (let i = 0; i < pizzaList.length; i++) {
        var serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'' + pizzaList[i].sauce + '\'');
        for (let j = 0; j < pizzaList[i].toppings.length; j++) {
            serverReply = await pool.query('UPDATE inventory SET count = count-1 WHERE name = \'' + pizzaList[i].toppings[j] + '\'');
        }
    }
    res.json(serverReply.rows);
})

app.get("/seasonalMenu", async (req, res) => {
    var seasonalReply = await pool.query('SELECT name FROM INVENTORY WHERE id > 48');
    return res.json(seasonalReply.rows);
})

//exit gracefully
process.on('SIGINT', function () {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

module.exports = {};