import React from "react";

const Finishorder = async () => {
    fetch(`http://localhost:5001/Plscheckout`);
    alert("Topping added to order");
}

function Checkout() {
    return (<div>
        <h1>Select Payment Type:</h1>
        <a href="/pizzatype">
            <button onClick={Finishorder}>Cash</button>
        </a>
        <a href="/pizzatype">
            <button onClick={Finishorder}>Card</button>
        </a>
        <a href="/pizzatype">
            <button onClick={Finishorder}>Dining Dollars</button>
        </a>
        <div>
            <a href="/pizzatype">
                <button> Add another Item</button>
            </a>
            <a href="/pizzatype">
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Checkout;