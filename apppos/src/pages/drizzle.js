import React from "react";

const Balsamic = async () => {
    fetch(`http://localhost:5001/addTopping/${"Balsamic Glaze"}`);
    alert("Topping added to order");
}

const Basilpesto = async () => {
    fetch(`http://localhost:5001/addTopping/${"Basil Pesto"}`);
    alert("Topping added to order");
}

const Bbqsauce = async () => {
    fetch(`http://localhost:5001/addTopping/${"BBQ Sauce"}`);
    alert("Topping added to order");
}

const Oliveoil = async () => {
    fetch(`http://localhost:5001/addTopping/${"Olive Oil"}`);
    alert("Topping added to order");
}

const Oregano = async () => {
    fetch(`http://localhost:5001/addTopping/${"Oregano"}`);
    alert("Topping added to order");
}

const Sriracha = async () => {
    fetch(`http://localhost:5001/addTopping/${"Sriracha"}`);
    alert("Topping added to order");
}

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
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

export default Drizzle;