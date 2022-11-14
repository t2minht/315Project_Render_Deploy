import React from "react";

function Bananapep() {

}

function Grepep() {

}

function Redpep() {

}

function Blackoli() {

}

function Kalmataoli() {

}

function Cherrytoma() {

}

function Redonion() {

}

function Spinach() {

}

function Brocolli() {

}

function Caraonion() {

}

function Garlic() {

}

function Mushrooms() {

}

function Redtatoes() {

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
                <button> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Veggies;