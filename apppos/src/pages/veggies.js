import React from "react";

const Bananapep = async () => {
    fetch(`http://localhost:5001/addTopping/${"Banana Peppers"}`);
    alert("Topping added to order");
}

const Grepep = async () => {
    fetch(`http://localhost:5001/addTopping/${"Green Peppers"}`);
    alert("Topping added to order");
}

const Redpep = async () => {
    fetch(`http://localhost:5001/addTopping/${"Red Peppers"}`);
    alert("Topping added to order");
}

const Blackoli = async () => {
    fetch(`http://localhost:5001/addTopping/${"Black Olives"}`);
    alert("Topping added to order");
}

const Kalmataoli = async () => {
    fetch(`http://localhost:5001/addTopping/${"Kalmata Olives"}`);
    alert("Topping added to order");
}

const Cherrytoma = async () => {
    fetch(`http://localhost:5001/addTopping/${"Cherry Tomatoes"}`);
    alert("Topping added to order");
}

const Redonion = async () => {
    fetch(`http://localhost:5001/addTopping/${"Red Onions"}`);
    alert("Topping added to order");
}

const Spinach = async () => {
    fetch(`http://localhost:5001/addTopping/${"Spinach"}`);
    alert("Topping added to order");
}

const Brocolli = async () => {
    fetch(`http://localhost:5001/addTopping/${"Brocolli"}`);
    alert("Topping added to order");
}

const Caraonion = async () => {
    fetch(`http://localhost:5001/addTopping/${"Caramelized Onions"}`);
    alert("Topping added to order");
}

const Garlic = async () => {
    fetch(`http://localhost:5001/addTopping/${"Garlic"}`);
    alert("Topping added to order");
}

const Mushrooms = async () => {
    fetch(`http://localhost:5001/addTopping/${"Mushrooms"}`);
    alert("Topping added to order");
}

const Redtatoes = async () => {
    fetch(`http://localhost:5001/addTopping/${"Red Potatoes"}`);
    alert("Topping added to order");
}

const Addtoorder = async () => {
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