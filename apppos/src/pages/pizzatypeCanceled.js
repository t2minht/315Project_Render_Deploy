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


function PizzatypeCancel() {
    const CancelOrder = async () => {
        await fetch(`http://localhost:5001/cancelOrder`);
        alert("Order Canceled");
    }
    
    const [response, setResponse] = useState("");
    const OrderInfo = async () => {
        const order = await fetch("http://localhost:5001/checkoutScreen").then((response) => response.text());
        setResponse(order);
    }



    useEffect(() => {
        CancelOrder();
        OrderInfo();
    }, [])


    return (
        <Fragment>
            <h1>Select Pizza Type:</h1>
            <button onClick={HandleClickPep}>Pepperoni Pizza</button>
            <button onClick={CheeseZa}>Cheese</button>
            <a href="/topping-one">
            <button>One Topping</button>
            </a>
            <a href="/topping-multi">
            <button >2-4 Topping</button>
            </a>
            <div>
                <a href="/pizzatypeCanceled">
                <button> Cancel Order</button>
                </a>
                <a href="/checkout">
                    <button > Complete Order</button>
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




export default PizzatypeCancel;