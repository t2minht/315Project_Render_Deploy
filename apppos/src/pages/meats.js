import React, { useEffect, Fragment, useState } from "react";
const Pepperoni = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Pepperoni"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }

}


const Ham = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Ham"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Sausage = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Sausage"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Meatballs = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Meatballs"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Salami = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Salami"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Bacon = async (e) => {
    e.preventDefault();
    //stringify the reply if needed, see what it is first
    if (await fetch(`http://localhost:5001/addTopping/${'Bacon'}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }

}

const Chicken = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Chicken"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}
const Removetopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/removeLastTopping`)
    window.location.reload();

}


function Meats() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        order = order.replace(/\"/g, "");
        setResponse(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])
    return (<Fragment><h1>Select Meats:</h1>
        <button onClick={Pepperoni}>Pepperoni</button>
        <button onClick={Ham}>Black Forest Ham</button>
        <button onClick={Sausage}>Italian Sausage</button>
        <button onClick={Meatballs}>Meatballs</button>
        <button onClick={Salami}>Salami</button>
        <button onClick={Bacon}>Bacon</button>
        <button onClick={Chicken}>Smoked Chicken</button>
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
    </Fragment>);
}

export default Meats;