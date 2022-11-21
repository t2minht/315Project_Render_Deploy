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
            <Table data={inventory} column={props.column}/>
            <h1 className='text-center mt-5'>Restock (Id, Amount) </h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" className="form-control1" value={id} onChange={e => setID(e.target.value)}/>
                <input type="text" className="form-control1" value={newAmount} onChange={e => setNewAmount(e.target.value)}/>
                <button onClick={onSubmitForm}>Submit</button>
            </form>
            <button onClick={restockSuggested}>Restock Suggested Amount</button>
            
        </Fragment>
        
        );
}

export default Restock;