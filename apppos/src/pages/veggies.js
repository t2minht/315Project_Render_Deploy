import React from "react";

const Bananapep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Banana Peppers"}`);
    alert("Too many toppings");
}

const Grepep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Green Peppers"}`);
    alert("Too many toppings");
}

const Redpep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Red Peppers"}`);
    alert("Too many toppings");
}

const Blackoli = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Black Olives"}`);
    alert("Too many toppings");
}

const Kalmataoli = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Kalmata Olives"}`);
    alert("Too many toppings");
}

const Cherrytoma = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Cherry Tomatoes"}`);
    alert("Too many toppings");
}

const Redonion = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Red Onions"}`);
    alert("Too many toppings");
}

const Spinach = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Spinach"}`);
    alert("Too many toppings");
}

const Brocolli = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Brocolli"}`);
    alert("Too many toppings");
}

const Caraonion = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Caramelized Onions"}`);
    alert("Too many toppings");
}

const Garlic = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Garlic"}`);
    alert("Too many toppings");
}

const Mushrooms = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Mushrooms"}`);
    alert("Too many toppings");
}

const Redtatoes = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Red Potatoes"}`);
    alert("Too many toppings");
}


const cancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}


function Veggies() {
    return (<div><h1>Select Vegetables:</h1>
        <button onclick={Bananapep}>Banana Peppers</button>
        <button onclick={Grepep}>Green Peppers</button>
        <button onclick={Redpep}>Red Peppers</button>
        <button onclick={Blackoli}>Black Olives</button>
        <button onclick={Kalmataoli}>Kalmata Olives</button>
        <button onclick={Cherrytoma}>Cherry Tomatoes</button>
        <button onclick={Redonion}>Red Onions</button>
        <button onclick={Spinach}>Spinach</button>
        <button onclick={Brocolli}>Brocolli</button>
        <button onclick={Caraonion}>Caramelized Onions</button>
        <button onclick={Garlic}>Garlic</button>
        <button onclick={Mushrooms}>Mushrooms</button>
        <button onclick={Redtatoes}>Red Potatoes</button>
        <div>
            <a href="/topping">
                <button> Add More Toppings</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Veggies;