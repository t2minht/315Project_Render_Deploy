import React from 'react';
const HandleClickPep = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    alert("Pizza added to order");
}
const CheeseZa = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createSetPizza/${1}/${"Cheese"}`);
    alert("Pizza added to order");
}
const OneTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${1}/${"One_Topping"}`);
    alert("Pizza Type Selected");
}
const MultiTopping = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/createPizza/${4}/${"Multi_Topping"}`);
    alert("Pizza Type Selected");
}
const CancelOrder = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/cancelOrder`);
    alert("Order Canceled");
}



function Pizzatype() {
    return (
        <div>
            <h1>Select Pizza Type:</h1>
            <button onClick={HandleClickPep}>Pepperoni Pizza</button>
            <button onClick={CheeseZa}>Cheese</button>
            <button onClick={OneTopping}>One Topping</button>
            <button onClick={MultiTopping}>2-4 Topping</button>
            <div>
                <button onClick={CancelOrder}> Cancel Order</button>
                <a href="/checkout">
                    <button > Complete Order</button>
                </a>
                <a href="/topping">
                    <button>Next</button>
                </a>
            </div>
        </div >
    );
}




export default Pizzatype;