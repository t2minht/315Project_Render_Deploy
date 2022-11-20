import React from "react";

const Red = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Red"}`);
    alert("Sauce Changed");
}

const Zestyred = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Zesty Red"}`);
    alert("Sauce Changed");
}

const White = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"White"}`);
    alert("Sauce Changed");
}

const Regular = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${false}`);
    alert("Crust Changed");
}

const Cauliflour = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${true}`);
    alert("Crust Changed");
}

const Addtoorder = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
const cancelOrder = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Sauce() {
    return (<div><h1>Select Sauce and Crust:</h1>
        <div>
            <button onClick={Red}>Red Sauce</button>
            <button onClick={Zestyred}>Zesty Red Sauce</button>
            <button onClick={White}>White Sauce</button>
        </div>
        <div>
            <button onClick={Regular}>Regular Crust</button>
            <button onClick={Cauliflour}>Cauliflour Crust</button>
        </div>
        <div>
            <a href="/topping">
                <button> Back</button>
            </a>
            <a href="/pizzatype">
                <button onClick={Addtoorder}> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Sauce;