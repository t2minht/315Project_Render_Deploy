import React from "react";

function Pizzatype() {
    return (
        <div>
            <h1>Select Pizza Type:</h1>
            <a href="/topping">
                <button >Cheese</button>
            </a>
            <a href="/topping">
                <button>Pepperoni</button>
            </a>
            <a href="/topping">
                <button>One Topping</button>
            </a>
            <a href="/topping">
                <button>2-4 Topping</button>
            </a>
        </div>
    );
}

export default Pizzatype;