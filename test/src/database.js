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
const pizza = []
const drinks = []

app.get("/inventory", async (req, res) => {
    let inv = await pool.query('SELECT * FROM inventory');
    //inventory = inv.rows;
    res.json(inv.rows);
});

app.get("/id/:x", async (req, res) => {
    let inv = await pool.query('SELECT * FROM inventory WHERE id = ' + req.params.x);
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

app.get("/salesTogether", async (req, res) => {
    let inv = await pool.query("SELECT customerinfo.id,customerinfo.orderdate,pizza.pizzaname,drinks.drinkname FROM customerinfo INNER JOIN drinks ON customerinfo.id=drinks.id INNER JOIN pizza ON customerinfo.id=pizza.id WHERE orderdate BETWEEN '" + req.body.beginDate + "' and '" + req.body.endDate + "'");
    res.json(inv.rows);
    
});


process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

module.exports = {  };