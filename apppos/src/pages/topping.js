import React from "react";

function Topping() {
    return (<div><h1>Select Toppings:</h1>
        <a href="/meats">
            <button>Meats</button>
        </a>
        <a href="/veggies">
            <button>Vegetables</button>
        </a>
        <a href="/drizzle">
            <button>Drizzles</button>
        </a>
        <a href="/sauce">
            <button>Sauce & Crust</button>
        </a>
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

export default Topping;