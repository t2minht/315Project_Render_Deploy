import React, { useEffect, Fragment, useState } from "react";

function Seasonal() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        const order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        setResponse(order);
    }

    const [season, setSeason] = useState("");
    const Seasonalinfo = async () => {
        const order = await fetch("http://localhost:5001/seasonalMenu").then((response) => response.text());
        setSeason(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])
    return (<Fragment><h1>Select Seasonal Toppings:</h1>
        <p>{season}</p>
        <div>
            <a href="/topping">
                <button> Add More Toppings</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
        <p>{response}</p>
    </Fragment>);
}

export default Seasonal;