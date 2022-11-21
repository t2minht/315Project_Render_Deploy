import React, { useEffect, Fragment, useState } from "react";


function Topping() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        const order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        setResponse(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])
    return (<div><h1>Select Toppings:</h1>
        <a href="/meats">
            <button>Meats</button>
        </a>
        <a href="/veggies">
            <button>Vegetables</button>
        </a>
        <a href="/drizzle">
            <button>Drizzles</button>
        </a>
        <a href="/seasonal">
            <button>Seasonal Toppings</button>
        </a>
        <div>
            <a href="/pizzatype">
                <button>Select Different Pizza Type</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
        <p>{response}</p>
    </div>);
}

export default Topping;