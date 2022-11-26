import React, { useEffect, Fragment, useState } from "react";

const Finishorder = async (e) => {
    e.preventDefault();
    const response =
        await fetch(`http://localhost:5001/checkoutServ`, {
            method: "PUT",
        });
    alert("Order Completed");
}


function Checkout() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        order = order.replace(/\"/g, "");
        order = order.replace(/\\/g, "");
        setResponse(order);
    }
    const Addtoorder = async () => {
        await fetch(`http://localhost:5001/addToOrder`);
        await fetch(`http://localhost:5001/deletePizza`);
    }
    const [price, setPrice] = useState("");
    const PriceInfo = async () => {
        let order = await fetch("http://localhost:5001/calculatePrice").then((response) => response.text());
        order = order.replace(/\"/g, "");

        setPrice(order);
    }


    useEffect(() => {
        Addtoorder();
        OrderInfo();
        PriceInfo();
    }, [])
    return (<Fragment>
        <h1>Select Payment Type:</h1>
        <button onClick={Finishorder}>Cash</button>
        <button onClick={Finishorder}>Card</button>
        <button onClick={Finishorder}>Dining Dollars</button>
        <div>
            <a href="/pizzatype">
                <button> Add another Item</button>
            </a >
            <a href="/pizzatypeCanceled">
                <button > Cancel Order</button>
            </a>
        </div>

        <p>{response}</p>
        <p>Total Cost: ${price}</p>
    </Fragment>);
}

export default Checkout;