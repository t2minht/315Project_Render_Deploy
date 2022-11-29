import React from "react";
import Base from "../PizzaToppings/Pizza.png";
import Top1 from "../PizzaToppings/bacon.png";
import Top2 from "../PizzaToppings/Banana_Peppers.png";
import Top3 from "../PizzaToppings/Black_Forest_Ham.png";
import Top4 from "../PizzaToppings/Black_Olives.png";
import Top5 from "../PizzaToppings/brocolli.png";
import Top6 from "../PizzaToppings/Caramelized_Onion.png";
import Top7 from "../PizzaToppings/Cherry_Tomato.png";
import Top8 from "../PizzaToppings/garlic.png";
import Top9 from "../PizzaToppings/Green_Peppers.png";
import Top10 from "../PizzaToppings/Italian_Sausage.png";
import Top11 from "../PizzaToppings/jalapenos.png";
import Top12 from "../PizzaToppings/Kalmata_Olives.png";
import Top13 from "../PizzaToppings/Meatball.png";
import Top14 from "../PizzaToppings/mushrooms.png";
import Top15 from "../PizzaToppings/Pepperoni.png";
import Top16 from "../PizzaToppings/Red_Onions.png";
import Top17 from "../PizzaToppings/Red_Potatoes.png";
import Top18 from "../PizzaToppings/Red_Peppers.png";
import Top19 from "../PizzaToppings/salami.png";
import Top20 from "../PizzaToppings/Smoked_Chicken.png";
import Top21 from "../PizzaToppings/spinach.png";
import "../components/pizzabuilder.css"


function Pizzabuilder() {
    return (
        <>
            <h1>Toggle images</h1>
            <div className="toggle-wrapper">
                <img className="base" src={Base} />
                <img className="top1" src={Top1} />
                <img className="top2" src={Top2} />
                <img className="top3" src={Top3} />
                <img className="top4" src={Top4} />
                <img className="top5" src={Top5} />
                <img className="top6" src={Top6} />
                <img className="top7" src={Top7} />
                <img className="top8" src={Top8} />
                <img className="top9" src={Top9} />
                <img className="top10" src={Top10} />
                <img className="top11" src={Top11} />
                <img className="top12" src={Top12} />
                <img className="top13" src={Top13} />
                <img className="top14" src={Top14} />
                <img className="top15" src={Top15} />
                <img className="top16" src={Top16} />
                <img className="top17" src={Top17} />
                <img className="top18" src={Top18} />
                <img className="top19" src={Top19} />
                <img className="top20" src={Top20} />
                <img className="top21" src={Top21} />
            </div>
        </>
    );
}

export default Pizzabuilder;