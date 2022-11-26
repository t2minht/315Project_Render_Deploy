import React, { useEffect, Fragment, useState } from "react";
const Red = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Red"}`);
    window.location.reload();
}

const Zestyred = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Zesty_Red"}`);
    window.location.reload();
}

const White = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"White"}`);
    window.location.reload();
}

const Regular = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${false}`);
    window.location.reload();
}

const Cauliflour = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${true}`);
    window.location.reload();
}


function Sauce() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        order = order.replace(/\"/g, "");
        setResponse(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])
    return (<Fragment><h1>Select Sauce and Crust:</h1>
        <div>
            <button onClick={Red}>Red Sauce</button>
            <button onClick={Zestyred}>Zesty Red Sauce</button>
            <button onClick={White}>White Sauce</button>
        </div>
        <div>
            <button onClick={Regular}>Regular Crust</button>
            <button onClick={Cauliflour}>Cauliflour Crust</button>
        </div>
        <div>
            <a href="/topping">
                <button> Back</button>
            </a>

            <a href="/checkout">
                <button> Complete Item</button>
            </a>
        </div>
        <p>{response}</p>

    </Fragment>);
}

export default Sauce;