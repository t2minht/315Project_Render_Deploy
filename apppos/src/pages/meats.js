import React from "react";

function Pepperoni() {

}

function Ham() {

}

function Sausage() {

}

function Meatballs() {

}

function Salami() {

}

function Bacon() {

}

function Chicken() {

}

function Meats() {
    return (<div><h1>Select Meats:</h1>
        <button onclick={Pepperoni}>Pepperoni</button>
        <button onclick={Ham}>Black Forest Ham</button>
        <button onclick={Sausage}>Italian Sausage</button>
        <button onclick={Meatballs}>Meatballs</button>
        <button onclick={Salami}>Salami</button>
        <button onclick={Bacon}>Bacon</button>
        <button onclick={Chicken}>Smoked Chicken</button>
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

export default Meats;