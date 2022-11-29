import React, { useEffect, Fragment, useState } from "react";
import Pizzabuilder from "./pizzabuilder";


function ToppingOne() {

    const OneTopping = async () => {
        await fetch(`http://localhost:5001/createPizza/${1}/${"One_Topping"}`);
    }
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        order = order.replace(/\"/g, "");
        setResponse(order);
    }

    useEffect(() => {
        OneTopping();
        OrderInfo();
    }, [])
    let pizza = <Pizzabuilder />
    return (<Fragment><h1>Select Toppings:</h1>
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
            <a href="/pizzatypediff">
                <button>Select Different Pizza Type</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
        <p>{response}</p>
        <p>{pizza}</p>
    </Fragment>);
}

export default ToppingOne;