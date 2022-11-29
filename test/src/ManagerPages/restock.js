import React, { Component, Fragment, useEffect } from 'react';
import { useState } from 'react';
import Table from '../components/table';
import Navbar from './navbar';

function Restock(props) {
    const [id, setID] = useState('ID');
    const [newAmount, setNewAmount] = useState(0);
    const [inventory, setInventory] = useState([]);

    const getInventory = async () => {
        const response = await fetch("http://localhost:5001/inventory");
        const jsonData = await response.json();
        console.log(jsonData);
        setInventory(jsonData)
    }
    useEffect(() => {
        getInventory();
    }, [newAmount, id])

    const onSubmitForm = async (e) => {
        e.preventDefault();
        //console.log("clicked");
        const body = {"id": id, "newAmount": newAmount};
        console.log(body);
        const respone = await fetch("http://localhost:5001/updateAmount", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
        await getInventory();
    } 

    const restockSuggested = async (e) => {
        e.preventDefault();
        console.log(inventory.length)
        for (let i = 1; i<=inventory.length; ++i){
            let amt = Math.floor(Math.random() * 200) + 100;
            console.log(amt);
            const body = {"id": i, "newAmount": amt};
            const respone = await fetch("http://localhost:5001/updateAmount", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
        }
        await getInventory();
    }

    return (
        <Fragment>
            <Navbar/>
            <div class='heading'>
                <h1>Restock</h1>
                <p1>View and restock the inventory by each item or restock all items to the recommended amount</p1>
                <hr></hr>
            </div>
            <Table data={inventory} column={props.column}/>
            <br></br><br></br>
            <h1>Restock Single Item </h1>
            <p1>Restock a single item by entering the item ID and the amount to order</p1><br></br><br></br>
            <form onSubmit={onSubmitForm}>
                <label for="itemId">Item ID:</label>
                <input type="text" className="form-control1" id='itemID' value={id} onChange={e => setID(e.target.value)}/>
                <label for="newAmount">Order Amount:</label>
                <input type="text" className="form-control1" id='newAmount'value={newAmount} onChange={e => setNewAmount(e.target.value)}/>
                <br></br><br></br><br></br>
                <button onClick={onSubmitForm} class='button'>Submit</button>
                <hr></hr>
            </form>
            <h1>Restock All</h1>
            <p1>Restock all ingredients in the inventory by the recommended amount</p1><br></br><br></br>
            <button onClick={restockSuggested}class='button'>Restock Suggested Amount</button>
            <br></br><br></br>
            
        </Fragment>
        
        );
}

export default Restock;