import React from 'react';

const handleClickPep = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    await alert("Pizza added to order");
}
const CheeseZa = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/createSetPizza/${1}/${"Cheese"}`);
    await alert("Pizza added to order");
}
const oneTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${1}/${"One_Topping"}`);
}
const multiTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${4}/${"Multi_Topping"}`);
}
const cancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}



function Pizzatype() {
    return (
        <div>
            <h1>Select Pizza Type:</h1>
            <button onClick={handleClickPep}>Pepperoni Pizza</button>
            <button onClick={CheeseZa}>Cheese</button>
            {/* <a href="/topping"> */}
            <button onClick={oneTopping}>One Topping</button>
            {/* </a> */}
            <a href="/topping">
                <button onClick={multiTopping}>2-4 Topping</button>
            </a>
            <div>
                <a href="/pizzatype">
                    <button onClick={cancelOrder}> Cancel Order</button>
                </a>
                <a href="/checkout">
                    <button > Complete Order</button>
                </a>
                <a href="/topping">
                    <button>next</button>
                </a>
            </div>
        </div>
    );
}




export default Pizzatype;