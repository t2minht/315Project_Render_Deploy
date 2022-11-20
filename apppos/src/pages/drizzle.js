import React from "react";

const Balsamic = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Balsamic Glaze"}`);
    alert("Too many toppings");
}

const Basilpesto = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Basil Pesto"}`);
    alert("Too many toppings");
}

const Bbqsauce = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"BBQ Sauce"}`);
    alert("Too many toppings");
}

const Oliveoil = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Olive Oil"}`);
    alert("Too many toppings");
}

const Oregano = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Oregano"}`);
    alert("Too many toppings");
}

const Sriracha = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addTopping/${"Sriracha"}`);
    alert("Too many toppings");

}


const cancelOrder = async () => {
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Drizzle() {
    return (<div>
        <h1>Select Drizzle Type:</h1>
        <button onclick={Balsamic}>Balsamic Glaze</button>
        <button onclick={Basilpesto}>Basil Pesto</button>
        <button onclick={Bbqsauce}>BBQ Sauce</button>
        <button onclick={Oliveoil}>Olive Oil</button>
        <button onclick={Oregano}>Oregano</button>
        <button onclick={Sriracha}>Sriracha</button>
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

export default Drizzle;