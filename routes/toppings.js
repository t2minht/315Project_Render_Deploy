const express = require('express');
const router = express.Router();

router.get("/sauce", (req, res) => {
    return res.send("Your sauce")
})

router.get("/meats", (req,res) => {
    res.send("Meats")
})

router.post('/veggies', (req, res) => {
    res.send("Veggies");
})

router.post('/drizzle', (req, res) => {
    res.send("Pizza Drizzles");
})
router.post('/seasonal', (req, res) => {
    res.send("Seasonal Toppings");
})
