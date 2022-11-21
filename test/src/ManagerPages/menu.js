import React, { Component, useState, useEffect, Fragment } from 'react';
import Table from '../components/table';
import Navbar from './navbar';

function Menu(props) {
    const [menu, setMenu] = useState([]);
    const [id, setId] = useState(0);
    const [count, setCount] = useState(0);
    const [newCost, setNewCost] = useState(0);
    const [ingName, setIngName] = useState('ingredient name');
    const [name, setName] = useState('Ingredient');
    const [price, setPrice] = useState(0);
    

    const getMenu = async () => {
        const response = await fetch("http://localhost:5001/menu");
        const jsonData = await response.json();
        setMenu(jsonData)
    }

    const addNewIngredient = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/inventory");
        const jsonData = await response.json();
        let n = jsonData.length;
        console.log(n);
        const body = {"name": ingName, "count": count, "cost": newCost, "num": n};
        const respone = await fetch("http://localhost:5001/addIngredient", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
    }
    const addNewItem = async (e) => {
        e.preventDefault();
        const body = {"id": id, "name": name, "price": price};
        const respone = await fetch("http://localhost:5001/addItem", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
        await getMenu();
    }

    const changePrice = async (e) => {
        e.preventDefault();
        const body = {"id": id, "newPrice": price};
        const respone = await fetch("http://localhost:5001/updatePrice", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
        await getMenu();
    }

    useEffect(() => {
        getMenu();
    }, [])

    return (
        <Fragment> 
            <Navbar/>
            <Table data={menu} column={props.column}/>
            <div class='new-ingr'>
                <h1>Add a New Ingredient</h1>
                <form onSubmit={getMenu}>
                    <input type="text" className='form-control1' value={ingName} onChange={e => setIngName(e.target.value)}/>
                    <input type="text" className='form-control1' value={count} onChange={e => setCount(e.target.value)}/>
                    <input type="text" className='form-control1' value={newCost} onChange={e => setNewCost(e.target.value)}/>
                    <button onClick={addNewIngredient}>Submit</button>
                </form>
            </div>
            <div class='new-item'>
                <h1>Add a New Item</h1>
                <form>
                    <input type="text" className='form-control1' value={id} onChange={e => setId(e.target.value)}/>
                    <input type="text" className='form-control1' value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" className='form-control1' value={price} onChange={e => setPrice(e.target.value)}/>
                    <button onClick={addNewItem}>Submit</button>
                </form>   
            </div>
            <div class='price-change'>
                <h1>Change a price</h1>
                <form>
                    <input type="text" className='form-control1' value={id} onChange={e => setId(e.target.value)}/>
                    <input type="text" className='form-control1' value={price} onChange={e => setPrice(e.target.value)}/>
                    <button onClick={changePrice}>Submit</button>
                </form>   
            </div>
          
        </Fragment>
        );
}


export default Menu;