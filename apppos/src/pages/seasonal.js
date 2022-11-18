import React from "react";

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
const cancelOrder = async () => {
    fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
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
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Seasonal;