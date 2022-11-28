import React, { useEffect, Fragment, useState } from "react";
const HandleClickPep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    window.location.assign("/pizzatype");
}
const CheeseZa = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${0}/${"Cheese"}`);
    window.location.assign("/pizzatype");
}


function PizzatypeCancel() {
    const CancelOrder = async () => {
        await fetch(`http://localhost:5001/cancelOrder`);
    }

    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        order = order.replace(/\"/g, "");
        order = order.replace(/\//g, "");
        order = order.replace(/\\/g, "");
        setResponse(order);
    }

    const [price, setPrice] = useState("");
    const PriceInfo = async () => {
        let order = await fetch("http://localhost:5001/calculatePrice").then((response) => response.text());
        order = order.replace(/\"/g, "");

        setPrice(order);
    }

    useEffect(() => {
        CancelOrder();
        OrderInfo();
        PriceInfo();
    }, [])


    return (
        <Fragment>
            <h1>Select Pizza Type:</h1>
            <button onClick={HandleClickPep}>Pepperoni Pizza</button>
            <button onClick={CheeseZa}>Cheese</button>
            <a href="/topping-one">
                <button>One Topping</button>
            </a>
            <a href="/topping-multi">
                <button >2-4 Topping</button>
            </a>
            <div>
                <a href="/pizzatypeCanceled">
                    <button> Cancel Order</button>
                </a>
                <a href="/checkout">
                    <button > Complete Order</button>
                </a>

            </div>
            <p>{response}</p>
            <p>Total Cost: ${price}</p>
        </Fragment >
    );
}




export default PizzatypeCancel;