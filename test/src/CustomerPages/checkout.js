import React from "react";


const Finishorder = async (e) => {
    e.preventDefault();
    const response =
        await fetch(`http://localhost:5001/checkoutServ`, {
            method: "PUT",
        });
    alert("Order Completed");
}
const cancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Checkout() {
    return (<div>
        <h1>Select Payment Type:</h1>
        <button onClick={Finishorder}>Cash</button>
        <button onClick={Finishorder}>Card</button>
        <button onClick={Finishorder}>Dining Dollars</button>
        <div>
            <a href="/pizzatype">
                <button> Add another Item</button>
            </a >
            <button onClick={cancelOrder}> Cancel Order</button>
        </div>
    </div>);
}

export default Checkout;