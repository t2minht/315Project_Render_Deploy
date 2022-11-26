import React, { useEffect, Fragment, useState } from "react";

const Bananapep = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Banana Peppers"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Grepep = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Green Peppers"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Redpep = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Red Peppers"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Blackoli = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Black Olives"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Kalmataoli = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Kalmata Olives"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Cherrytoma = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Cherry Tomatoes"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Redonion = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Red Onions"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Spinach = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Spinach"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Brocolli = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Brocolli"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Caraonion = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Caramelized Onions"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Garlic = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Garlic"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Mushrooms = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Mushrooms"}`)
        .then((response) => response.text()) === "\"false\"") {
        alert("Too many toppings");
    } else {
        window.location.reload();
    }
}

const Redtatoes = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Red Potatoes"}`)
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



function Veggies() {
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        let order = await fetch("http://localhost:5001/currentPizza").then((response) => response.text());
        order = order.replace(/\"/g, "");
        setResponse(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])
    return (<Fragment><h1>Select Vegetables:</h1>
        <button onClick={Bananapep}>Banana Peppers</button>
        <button onClick={Grepep}>Green Peppers</button>
        <button onClick={Redpep}>Red Peppers</button>
        <button onClick={Blackoli}>Black Olives</button>
        <button onClick={Kalmataoli}>Kalmata Olives</button>
        <button onClick={Cherrytoma}>Cherry Tomatoes</button>
        <button onClick={Redonion}>Red Onions</button>
        <button onClick={Spinach}>Spinach</button>
        <button onClick={Brocolli}>Brocolli</button>
        <button onClick={Caraonion}>Caramelized Onions</button>
        <button onClick={Garlic}>Garlic</button>
        <button onClick={Mushrooms}>Mushrooms</button>
        <button onClick={Redtatoes}>Red Potatoes</button>
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

export default Veggies;