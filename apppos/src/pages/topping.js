import React from "react";

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
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
        <a href="/sauce">
            <button>Sauce & Crust</button>
        </a>
        <div>
            <a href="/pizzatype">
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

export default Topping;