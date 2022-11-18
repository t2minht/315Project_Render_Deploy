import React from "react";

const Pepperoni = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Pepperoni"}`)) {
        alert("Too many toppings");
    }
}


const Ham = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Ham"}`)) {
        alert("Too many toppings");
    }
}

const Sausage = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Sausage"}`)) {
        alert("Too many toppings");
    }
}

const Meatballs = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Meatballs"}`)) {
        alert("Too many toppings");
    }
}

const Salami = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Salami"}`)) {
        alert("Too many toppings");
    }
}

const Bacon = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Bacon"}`)) {
        alert("Too many toppings");
    }
}

const Chicken = async () => {
    if (!fetch(`http://localhost:5001/addTopping/${"Chicken"}`)) {
        alert("Too many toppings");
    }
}

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
const cancelOrder = async () => {
    fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Meats() {
    return (<div><h1>Select Meats:</h1>
        <button onclick={Pepperoni}>Pepperoni</button>
        <button onclick={Ham}>Black Forest Ham</button>
        <button onclick={Sausage}>Italian Sausage</button>
        <button onclick={Meatballs}>Meatballs</button>
        <button onclick={Salami}>Salami</button>
        <button onclick={Bacon}>Bacon</button>
        <button onclick={Chicken}>Smoked Chicken</button>
        <div>
            <a href="/topping">
                <button> Back</button>
            </a>
            <a href="/pizzatype">
                <button onclick={Addtoorder}> Complete Item</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Meats;