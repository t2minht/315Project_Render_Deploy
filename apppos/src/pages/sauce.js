import React from "react";

const Red = async () => {
    fetch(`http://localhost:5001/addSauce/${"Red"}`);
    alert("Sauce Changed");
}

const Zestyred = async () => {
    fetch(`http://localhost:5001/addSauce/${"Zesty Red"}`);
    alert("Sauce Changed");
}

const White = async () => {
    fetch(`http://localhost:5001/addSauce/${"White"}`);
    alert("Sauce Changed");
}

const Regular = async () => {
    fetch(`http://localhost:5001/crustType/${false}`);
    alert("Crust Changed");
}

const Cauliflour = async () => {
    fetch(`http://localhost:5001/crustType/${true}`);
    alert("Crust Changed");
}

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
const cancelOrder = async () => {
    fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Sauce() {
    return (<div><h1>Select Sauce and Crust:</h1>
        <div>
            <button onclick={Red}>Red Sauce</button>
            <button onclick={Zestyred}>Zesty Red Sauce</button>
            <button onclick={White}>White Sauce</button>
        </div>
        <div>
            <button onclick={Regular}>Regular Crust</button>
            <button onclick={Cauliflour}>Cauliflour Crust</button>
        </div>
        <div>
            <a href="/topping">
                <button> Back</button>
            </a>
            <a href="/pizzatype">
                <button onclick={Addtoorder}> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Sauce;