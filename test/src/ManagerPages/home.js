import React, { useEffect, useState } from "react";
import Table from "../components/table.jsx";
import Navbar from "./navbar.js";
import Menu from "./menu.js";
import Restock from "./restock.js";
import Inventory from "./inventory.js";
import Trends from "./trends.js";
//import ManagerHome from "./home.js";
import RestockReport from "./restockReport.js";
import ExcessReport from "./excessReport.js";
import SalesTogether from "./salesTogether.js";

function ManagerHome() {

    let component
    switch(window.location.pathname) {
        case "/manager":
            component = <Navbar/>
            break
    }
    return (
        <React.Fragment>
            {component}
            <div class ="heading">
                <h1>Welcome</h1>
            </div>
            <div class = "pizza-image">
                <img src={require('../images/spinLogo.png')} class ="pizza-logo"/>
            </div>
        </React.Fragment>
        
    );
}
export default ManagerHome;