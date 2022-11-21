import React from "react";

const Balsamic = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Balsamic Glaze"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }
}

const Basilpesto = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Basil Pesto"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }
}

const Bbqsauce = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"BBQ Sauce"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }
}

const Oliveoil = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Olive Oil"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }
}

const Oregano = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Oregano"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }
}

const Sriracha = async (e) => {
    e.preventDefault();
    if (await fetch(`http://localhost:5001/addTopping/${"Sriracha"}`)
        .then((response) => response.text()) == "\"false\"") {
        alert("Too many toppings");
    }

}


function Drizzle() {
    return (<div>
        <h1>Select Drizzle Type:</h1>
        <button onClick={Balsamic}>Balsamic Glaze</button>
        <button onClick={Basilpesto}>Basil Pesto</button>
        <button onClick={Bbqsauce}>BBQ Sauce</button>
        <button onClick={Oliveoil}>Olive Oil</button>
        <button onClick={Oregano}>Oregano</button>
        <button onClick={Sriracha}>Sriracha</button>
        <div>
            <a href="/topping">
                <button> Add More Toppings</button>
            </a>
            <a href="/sauce">
                <button>Next</button>
            </a>
        </div>
    </div>);
}

export default Drizzle;