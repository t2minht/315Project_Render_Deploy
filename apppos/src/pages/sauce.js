import React, { useEffect, Fragment, useState } from "react";
const Red = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Red"}`);
    alert("Sauce Changed");
}

const Zestyred = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Zesty_Red"}`);
    alert("Sauce Changed");
}

const White = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"White"}`);
    alert("Sauce Changed");
}

const Regular = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${false}`);
    alert("Crust Changed");
}

const Cauliflour = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${true}`);
    alert("Crust Changed");
}

const Addtoorder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
function Sauce() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        const order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
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