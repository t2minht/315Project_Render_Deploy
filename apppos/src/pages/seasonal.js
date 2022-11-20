import React from "react";


const cancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Seasonal() {
    return (<div><h1>Select Meats:</h1>
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

export default Seasonal;