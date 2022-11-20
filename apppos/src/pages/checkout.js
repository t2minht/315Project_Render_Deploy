import React from "react";

const Finishorder = async (e) => {
    e.preventDefault();
    const response =
        await fetch(`http://localhost:5001/checkoutServ`, {
            method: "PUT",
        });
    alert("Topping added to order");
}
const cancelOrder = async () => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
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
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Checkout;