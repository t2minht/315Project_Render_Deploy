import React from "react";

const Red = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Red"}`);
    alert("Sauce Changed");
}

const Zestyred = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"Zesty_Red"}`);
    alert("Sauce Changed");
}

const White = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addSauce/${"White"}`);
    alert("Sauce Changed");
}

const Regular = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${false}`);
    alert("Crust Changed");
}

const Cauliflour = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/crustType/${true}`);
    alert("Crust Changed");
}

const Addtoorder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/addToOrder`);
    alert("Pizza added to order");
}
function Sauce() {
    return (<div><h1>Select Sauce and Crust:</h1>
        <div>
            <button onClick={Red}>Red Sauce</button>
            <button onClick={Zestyred}>Zesty Red Sauce</button>
            <button onClick={White}>White Sauce</button>
        </div>
        <div>
            <button onClick={Regular}>Regular Crust</button>
            <button onClick={Cauliflour}>Cauliflour Crust</button>
        </div>
        <div>
            <a href="/topping">
                <button> Back</button>
            </a>
            <button onClick={Addtoorder}> Complete Item</button>
            <a href="/pizzatype">
                <button>Next Item</button>
            </a>
        </div>
    </div>);
}

export default Sauce;