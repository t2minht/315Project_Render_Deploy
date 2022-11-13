import React from "react";
import Checkout from "./pages/checkout.js";
import Drizzle from "./pages/drizzle.js";
import Meats from "./pages/meats.js";
import Pizzatype from "./pages/pizzatype.js";
import Sauce from "./pages/sauce.js";
import Seasonal from "./pages/seasonal.js";
import Topping from "./pages/topping.js";
import Veggies from "./pages/veggies.js";
import Navbar from "./navbar.js";

function App() {

  let component
  switch (window.location.pathname) {
    case "/pizzatype":
      component = <Pizzatype />
      break
    case "/topping":
      component = <Topping />
      break
    case "/veggies":
      component = <Veggies />
      break
    case "/drizzle":
      component = <Drizzle />
      break
    case "/meats":
      component = <Meats />
      break
    case "/sauce":
      component = <Sauce />
      break
    case "/seasonal":
      component = <Seasonal />
      break
    case "/checkout":
      component = <Checkout />
      break
    default:
      component = <Pizzatype />
      break

  }
  return (
    <React.Fragment>
      <Navbar />
      {component}
    </React.Fragment>

  );
}
export default App;
