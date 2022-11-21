import React from 'react';
const handleClickPep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    alert("Pizza added to order");
}
const CheeseZa = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${1}/${"Cheese"}`);
    alert("Pizza added to order");
}
const oneTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${1}/${"One_Topping"}`);
    alert("Pizza Type Selected");
}
const multiTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${4}/${"Multi_Topping"}`);
    alert("Pizza Type Selected");
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
            <button onClick={oneTopping}>One Topping</button>
            <button onClick={multiTopping}>2-4 Topping</button>
            <div>
                <button onClick={cancelOrder}> Cancel Order</button>
                <a href="/checkout">
                    <button > Complete Order</button>
                </a>
                <a href="/topping">
                    <button>Next</button>
                </a>
                {/* remove me after testing */}
                <a href="/directions">
                    <button>Directions</button>
                </a>
            </div>
        </div >
    );
}




export default Pizzatype;