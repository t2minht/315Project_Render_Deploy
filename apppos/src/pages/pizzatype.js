import React from "react";

function CheeseZa() {

}

function PepperoniZa() {

}

function OneTopZa() {

}

function MultiTopZa() {

}

function Pizzatype() {
    return (
        <div>
            <h1>Select Pizza Type:</h1>
            <a href="/topping">
                <button onClick={CheeseZa}>Cheese</button>
            </a>
            <a href="/topping">
                <button onClick={PepperoniZa}>Pepperoni</button>
            </a>
            <a href="/topping">
                <button onClick={OneTopZa}>One Topping</button>
            </a>
            <a href="/topping">
                <button onClick={MultiTopZa}>2-4 Topping</button>
            </a>
        </div>
    );
}

export default Pizzatype;