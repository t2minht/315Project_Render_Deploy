import React from "react";

const Pepperoni = async () => {
    fetch(`http://localhost:5001/addTopping/${"Pepperoni"}`);
    alert("Topping added to order");
}


const Ham = async () => {
    fetch(`http://localhost:5001/addTopping/${"Ham"}`);
    alert("Topping added to order");
}

const Sausage = async () => {
    fetch(`http://localhost:5001/addTopping/${"Sausage"}`);
    alert("Topping added to order");
}

const Meatballs = async () => {
    fetch(`http://localhost:5001/addTopping/${"Meatballs"}`);
    alert("Topping added to order");
}

const Salami = async () => {
    fetch(`http://localhost:5001/addTopping/${"Salami"}`);
    alert("Topping added to order");
}

const Bacon = async () => {
    fetch(`http://localhost:5001/addTopping/${"Bacon"}`);
    alert("Topping added to order");
}

const Chicken = async () => {
    fetch(`http://localhost:5001/addTopping/${"Chicken"}`);
    alert("Topping added to order");
}

const Addtoorder = async () => {
    fetch(`http://localhost:5001/addToOrder`);
    alert("Topping added to order");
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
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Meats;