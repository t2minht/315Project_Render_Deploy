import React from "react";

const Pepperoni = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Pepperoni"}`)) {
        alert("Too many toppings");
    }
}


const Ham = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Ham"}`)) {
        alert("Too many toppings");
    }
}

const Sausage = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Sausage"}`)) {
        alert("Too many toppings");
    }
}

const Meatballs = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Meatballs"}`)) {
        alert("Too many toppings");
    }
}

const Salami = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Salami"}`)) {
        alert("Too many toppings");
    }
}

const Bacon = async (e) => {
    console.log("BACON");
    e.preventDefault();
    //stringify the reply if needed, see what it is first
    await fetch(`http://localhost:5001/addTopping/${'Bacon'}`);
    alert("Too many toppings");

}

const Chicken = async (e) => {
    e.preventDefault();
    if (!fetch(`http://localhost:5001/addTopping/${"Chicken"}`)) {
        alert("Too many toppings");
    }
}

const cancelOrder = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}

function Meats() {
    return (<div><h1>Select Meats:</h1>
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
            <a href="/sauce">
                <button>Next</button>
            </a>
            <a href="/pizzatype">
                <button onClick={cancelOrder}> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Meats;