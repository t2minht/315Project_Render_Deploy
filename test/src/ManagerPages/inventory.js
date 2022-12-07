import React, { Component, useEffect, useState } from 'react';
import Table from "../components/table.jsx";
import Navbar from './navbar';

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
    return (
        
        <React.Fragment>
        <Navbar/>    
        <div class='heading'>
            <h1>Inventory</h1>
            <p>View the current inventory</p>
            <hr></hr>
        </div> 

         <Table data={inventory} column={props.column}/> 
         <br></br><br></br><br></br>

        </React.Fragment>
         
    );
}

export default Inventory;