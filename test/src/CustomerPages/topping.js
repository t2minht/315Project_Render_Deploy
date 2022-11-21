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
        <a href="/seasonal">
            <button>Seasonal Toppings</button>
        </a>
        <div>
            <a href="/pizzatype">
                <button>Select Different Pizza Type</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
    </div>);
}

export default Topping;