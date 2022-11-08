import React, { useEffect, useState } from "react";
import Table from './components/table.jsx'
import Navbar from "./navbar.js";
import Menu from "./pages/menu.js";
import Restock from "./pages/restock.js";
import Inventory from "./pages/inventory.js";
import Trends from "./pages/trends.js";
import Home from "./pages/home.js";
import RestockReport from "./pages/restockReport.js";
import ExcessReport from "./pages/excessReport.js";
import SalesTogether from "./pages/salesTogether.js";

function App() {

    const [inventoryTable, setInventoryTable] = useState([1,1,1,1,1,1,1,1,1]);

    const [restockTable, setRestockTable] = useState([]);
    const [excessTable, setExcessTable] = useState([]);
    const [menuTable, setMenuTable] = useState([1,1,1,1,1,1,1]);
    const [togetherTable, setTogetherTable] = useState([]);
    const [salesTrendsTable, setSalesTrendsTable] = useState([]);

    const invColumn = [
        {heading: 'ID', key: 1, value: "id"},
        {heading: 'Name', key: 2, value: "name"},
        {heading: 'Item Type', key: 4, value: "itemtype"},
        {heading: 'Cost', key: 3, value: "cost"},
        {heading: 'Count', key: 4, value: "count"},
        
    ];
    const toColumn = [
        {heading: 'Item 1', key: 5, value: "item1"},
        {heading: 'Item 2', key: 6, value: "item2"},
        {heading: 'Count', key: 7, value: "count"},
    ];

    const restockReportCols = [
        {heading: 'Name', key: 10, value: "name"},
        {heading: 'Count', key: 12, value: "count"},
        {heading: 'Amount', key: 11, value: "amount"},
    ];

    const menuColumn = [
        {heading: 'ID', key: 13, value: "id"},
        {heading: 'Name', key: 14, value: "name"},
        {heading: 'Cost', key: 15, value: "price"},
    ];

    const excessCols = [
        {heading: 'ID', key: 16, value: "id"},
        {heading: 'Name', key: 17, value: "name"},
        {heading: 'Count', key: 18, value: "count"},
    ];

    const salesTrendsCols = [ //TODO
        {heading: 'Name', key: 19, value: "name"},
        {heading: 'Units Sold', key: 20, value: "count"},
    ];
    

    let component
    switch(window.location.pathname) {
        case "/":
            component = <Home/>
            break
        case "/menu":
            component = <Menu data={menuTable} column={menuColumn}/>
            break
        case "/restock":
            component = <Restock data={inventoryTable} column={invColumn}/>
            break
        case "/inventory":
            component = <Inventory data={inventoryTable} column={invColumn}/>
            break
        case "/trends":
            component = <Trends data={salesTrendsTable} column={salesTrendsCols}/>
            break
        case "/restockReport":
            component = <RestockReport data={restockTable} column={restockReportCols}/>
            break
        case "/excessReport":
            component = <ExcessReport data={excessTable} column={excessCols}/>
            break
        case "/salesTogether":
            component = <SalesTogether data={togetherTable} column={toColumn}/>
            break
    }
    return (
        <React.Fragment>
            <Navbar/>
            {component}
        </React.Fragment>
        
    );
}
export default App;