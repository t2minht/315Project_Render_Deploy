import React, { useEffect, Fragment, useState } from "react";
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
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        const order = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        alert(order);
        setResponse(order);
    }

    useEffect(() => {
        OrderInfo();
    }, [])


    return (
        <Fragment>
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
                {/* remove me after testing */}
                <a href="/directions">
                    <button>Directions</button>
                </a>
            </div>
            <p>{response}</p>
        </Fragment >
    );
}




export default Pizzatype;