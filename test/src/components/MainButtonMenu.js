import React, {useState} from 'react'
// import {BrowserRouter, Route, Link} from "react-router-dom";
import ServerCheese from '../ServerPages/ServerCheese';
import ServerDrink from '../ServerPages/ServerDrink';
import ServerMultiTopping from '../ServerPages/ServerMultiTopping';
import ServerOneTopping from '../ServerPages/ServerOneTopping';
import ServerPepperoni from '../ServerPages/ServerPepperoni';
import ServerCheckout from '../ServerPages/ServerCheckout';
import "./style.css";


function timeout(delay){
    return new Promise( res => setTimeout(res, delay));
}


export default function MainButtonMenu(props) {
    const [component, setComponent] = useState("");

    const handleSubmit = (e, str) =>{
        
        e.preventDefault();
        props.onSubmit(str);
    }

    return (
        <div id = "button-container">
            <form onSubmit={handleSubmit} id = "button-panel">
                <button onClick={() => setComponent("Cheese")}>Cheese</button>
                <button onClick={() => setComponent("Pepperoni")}>Pepperoni</button>
                <button onClick={() => setComponent("One Topping")}>One Topping</button>
                <button onClick={() => setComponent("Multi Topping")}>Multi Topping</button>
                <button onClick={() => setComponent("Drink")}>Drink</button>
                <button onClick={() => setComponent("Checkout")}>Checkout</button>
                {/* <button type="submit">Clicker</button> */}
            </form>
            <div id = "changing-buttons">
                {
                    {
                        "Cheese": <ServerCheese onSubmit={handleSubmit}/>,
                        "Pepperoni": <ServerPepperoni onSubmit={handleSubmit}/>,
                        "One Topping": <ServerOneTopping onSubmit={handleSubmit}/>,
                        "Multi Topping": <ServerMultiTopping onSubmit={handleSubmit}/>,
                        "Drink": <ServerDrink onSubmit={handleSubmit}/>,
                        "Checkout":<ServerCheckout onSubmit={handleSubmit} />
                    }[component]
                }
            </div>
        </div>
    )
}