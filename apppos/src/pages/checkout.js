import React from "react";

function Cash() {

}

function Card() {

}

function Diningdollars() {

}

function Checkout() {
    return (<div>
        <h1>Select Payment Type:</h1>
        <button onClick={Cash}>Cash</button>
        <button onClick={Card}>Card</button>
        <button onClick={Diningdollars}>Dining Dollars</button>
        <div>
            <a href="/pizzatype">
                <button> Add another Item</button>
            </a>
            <a href="/pizzatype">
                <button> Cancel Order</button>
            </a>
        </div>
    </div>);
}

export default Checkout;