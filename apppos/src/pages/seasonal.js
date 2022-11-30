import React, { useEffect, Fragment, useState } from "react";
import Pizzabuilder from "./pizzabuilder";
const Removetopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/removeLastTopping`)
    window.location.reload();

}

function Seasonal() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        order = order.replace(/\"/g, "");
        setResponse(order);
    }

    const [season, setSeason] = useState("");
    const Seasonalinfo = async () => {
        let order = await fetch("http://localhost:5001/seasonalMenu").then((response) => response.text());
        order = order.replace(/name/g, "");
        order = order.replace(/\[/g, "");
        order = order.replace(/]/g, "");
        order = order.replace(/{/g, "");
        order = order.replace(/}/g, "");
        order = order.replace(/\"/g, "");
        order = order.replace(/:/g, "");
        const myArray = order.split(",");
        for (let i = 0; i < myArray.length; i++) {
            let myDiv = document.getElementById("seasonalButtons");
            let button = document.createElement('BUTTON');
            let text = document.createTextNode(myArray[i]);
            button.appendChild(text);
            button.id = myArray[i];
            button.onclick = async function (e) {
                e.preventDefault();
                if (await fetch(`http://localhost:5001/addTopping/${myArray[i]}`)
                    .then((response) => response.text()) === "\"false\"") {
                    alert("Too many toppings");
                } else {
                    window.location.reload();
                }
            };
            myDiv.appendChild(button);
        }

    }



    useEffect(() => {
        Seasonalinfo();
        OrderInfo();
    }, [])
    let pizza = <Pizzabuilder />
    return (<Fragment><h1>Select Seasonal Toppings:</h1>
        <p>{season}</p>
        <div id="seasonalButtons"></div>
        <div>
            <a href="/topping">
                <button> Add More Toppings</button>
            </a>
            <button onClick={Removetopping}>Remove Last Topping</button>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
        <p>{response}</p>
        <p>*Note: Seasonal Toppings Will Not Appear On Pizza*</p>
        <p>{pizza}</p>
    </Fragment>);
}

export default Seasonal;