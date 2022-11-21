import React, { useEffect } from "react";

const Finishorder = async (e) => {
    e.preventDefault();
    const response =
        await fetch(`http://localhost:5001/checkoutServ`, {
            method: "PUT",
        });
    alert("Order Completed");
}
const CancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}






function Checkout() {
    let response;
    const OrderInfo = async () => {
        response = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        alert(response);
    }
    useEffect(() => {
        OrderInfo();
    }, [])

    return (<div>
        <h1>Select Payment Type:</h1>
        <button onClick={Finishorder}>Cash</button>
        <button onClick={Finishorder}>Card</button>
        <button onClick={Finishorder}>Dining Dollars</button>
        <div>
            <a href="/pizzatype">
                <button> Add another Item</button>
            </a >
            <button onClick={CancelOrder}> Cancel Order</button>
        </div>
        <div>
            {response}
        </div>
    </div>);
}

export default Checkout;