import React from "react";

function Bananapep() {
    fetch(`http://localhost:5001/addTopping/${"Banana Peppers"}`);
    alert("Topping added to order");
}

function Grepep() {
    fetch(`http://localhost:5001/addTopping/${"Green Peppers"}`);
    alert("Topping added to order");
}

function Redpep() {
    fetch(`http://localhost:5001/addTopping/${"Red Peppers"}`);
    alert("Topping added to order");
}

function Blackoli() {
    fetch(`http://localhost:5001/addTopping/${"Black Olives"}`);
    alert("Topping added to order");
}

function Kalmataoli() {
    fetch(`http://localhost:5001/addTopping/${"Kalmata Olives"}`);
    alert("Topping added to order");
}

function Cherrytoma() {
    fetch(`http://localhost:5001/addTopping/${"Cherry Tomatoes"}`);
    alert("Topping added to order");
}

function Redonion() {
    fetch(`http://localhost:5001/addTopping/${"Red Onions"}`);
    alert("Topping added to order");
}

function Spinach() {
    fetch(`http://localhost:5001/addTopping/${"Spinach"}`);
    alert("Topping added to order");
}

function Brocolli() {
    fetch(`http://localhost:5001/addTopping/${"Brocolli"}`);
    alert("Topping added to order");
}

function Caraonion() {
    fetch(`http://localhost:5001/addTopping/${"Caramelized Onions"}`);
    alert("Topping added to order");
}

function Garlic() {
    fetch(`http://localhost:5001/addTopping/${"Garlic"}`);
    alert("Topping added to order");
}

function Mushrooms() {
    fetch(`http://localhost:5001/addTopping/${"Mushrooms"}`);
    alert("Topping added to order");
}

function Redtatoes() {
    fetch(`http://localhost:5001/addTopping/${"Red Potatoes"}`);
    alert("Topping added to order");
}

function Addtoorder() {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
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
                <button> Back</button>
            </a>
            <a href="/pizzatype">
                <button onclick={Addtoorder}> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Veggies;