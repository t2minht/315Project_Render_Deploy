// 'use strict';
import React, { Component, useState } from 'react';

// const e = React.createElement;

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }

//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }

//         return e(
//             'button',
//             { onClick: () => this.setState({ liked: true }) },
//             'Like'
//         );
//     }
// }

// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));


const handleClick = async () => {
    fetch(`http://localhost:5001/createSetPizza/${1}/${"Pepperoni"}`);
    alert("Pizza added to order");
}

function Pizzatype() {
    return (
        <div>
            <a href="/checkout">
                <button>Go to checkout screen</button>
            </a>
            <button onClick={handleClick}>Pepperoni Pizza</button>

            <a href="/topping">
                <button onClick={PepperoniZa}>Pepperoni</button>
            </a>
            <a href="/topping">
                <button onClick={OneTopZa}>One Topping</button>
            </a>
            <a href="/topping">
                <button onClick={MultiTopZa}>2-4 Topping</button>
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