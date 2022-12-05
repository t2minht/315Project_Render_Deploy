import React, { useEffect, Fragment, useState } from "react";

const Finishorder = async (e) => {
    e.preventDefault();
    const response =
        await fetch(`http://localhost:5001/checkoutServ`, {
            method: "PUT",
        });
    await fetch(`http://localhost:5001/cancelOrder`);
    window.location.assign("/locationguide");
}
function NewlineText(props) {
    const text = props.text;
    const newText = text.split('~').map(str => <p className="orderDisplay">{str}</p >);
    return newText;
}

function Checkout() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        order = order.replace(/\"/g, "");
        order = order.replace(/\\/g, "");
        setResponse(order);
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
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
        <h1 className="pageTitle-checkout">Select Payment Type:</h1>
        <div className="grid-container-topping3">
            <button className="grid-item-topping3" onClick={Finishorder}>Cash</button>
            <button className="grid-item-topping3" onClick={Finishorder}>Card</button>
            <button className="grid-item-topping3" onClick={Finishorder}>Dining Dollars</button>
        </div>
        <h1 className="or">Or: </h1>
        <div className="grid-container-checkout">
            <a href="/pizzatype">
                <button className="grid-item-topping3"> Add another Item</button>
            </a >
            <a href="/pizzatypeCanceled">
                <button className="grid-item-topping3" > Cancel Order</button>
            </a>
        </div>

        <div className="order-container">
            <NewlineText text={response} />
        </div>
        <p className="priceDisplay">Total Cost: ${price}</p>
    </Fragment>);
}

export default Checkout;