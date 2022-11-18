import React from 'react';

const handleClickPep = async () => {
    fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    alert("Pizza added to order");
}
const CheeseZa = async () => {
    fetch(`http://localhost:5001/createSetPizza/${1}/${"Cheese"}`);
    alert("Pizza added to order");
}

const oneTopping = async () => {
    fetch(`http://localhost:5001/createPizza/${1}/${"One_Topping"}`);
    alert("Pizza added to order");
}
const multiTopping = async () => {
    fetch(`http://localhost:5001/createPizza/${4}/${"Multi_Topping"}`);
    alert("Pizza added to order");
}


function Pizzatype() {
    return (
        <div>
            <button onClick={handleClickPep}>Pepperoni Pizza</button>
            <button onClick={CheeseZa}>Cheese</button>
            <a href="/topping">
                <button onClick={oneTopping}>One Topping</button>
            </a>
            <a href="/topping">
                <button onClick={multiTopping}>2-4 Topping</button>
            </a>
            <div>
                <a href="/pizzatype">
                    <button> Cancel Order</button>
                </a>
                <a href="/checkout">
                    <button> Check Out</button>
                </a>
            </div>
        </div>
    );
}




export default Pizzatype;