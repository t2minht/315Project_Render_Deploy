import React from "react";

function Addtoorder() {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
}

function Seasonal() {
    return (<div><h1>Select Meats:</h1>
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

export default Seasonal;