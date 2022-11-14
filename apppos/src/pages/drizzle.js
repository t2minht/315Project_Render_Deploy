import React from "react";

function Balsamic() {

}

function Basilpesto() {

}

function Bbqsauce() {

}

function Oliveoil() {

}

function Oregano() {

}

function Sriracha() {

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
                <button> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Drizzle;