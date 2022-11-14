import React from "react";

function Red() {

}

function Zestyred() {

}

function White() {

}

function Regular() {

}

function Cauliflour() {

}

function Addtoorder() {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
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
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Sauce;