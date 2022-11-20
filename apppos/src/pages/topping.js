import React from "react";

const cancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

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
            <a href="/topping">
                <button> Add More Toppings</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Topping;