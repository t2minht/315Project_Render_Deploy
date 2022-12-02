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
const Drinks = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/soloDrink`);
    window.location.assign("/pizzatype");
}

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('~').map(str => <p>{str}</p>);
    return newText;
}
const Removelast = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/clearSelection`);
    window.location.assign("/pizzatype");
}


function Pizzatype() {
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
            <button onClick={Drinks}>Add A Fountain Drink</button>
            <div>
                <button onClick={Removelast}>Remove Last Item</button>
                <a href="/pizzatypeCanceled">
                    <button> Cancel Order</button>
                </a>
                <a href="/checkout">
                    <button > Complete Order</button>
                </a>
                {/* remove me after testing */}

            </div>
            <NewlineText text={response} />
            <p>Total Cost: ${price}</p>
        </Fragment >
    );
}




export default Pizzatype;