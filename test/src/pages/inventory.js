import React, { Component, useEffect, useState } from 'react';
import Table from "../components/table";

function Inventory(props) {

    const [inventory, setInventory] = useState([]);

    const getInventory = async () => {
        const response = await fetch("http://localhost:5001/inventory");
        const jsonData = await response.json();
        setInventory(jsonData)
    }
    useEffect(() => {
        getInventory();
    }, [])
    return ( <Table data={inventory} column={props.column}/> );
}

export default Inventory;