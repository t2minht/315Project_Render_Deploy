import React, { Component, useEffect, useState } from 'react';
import Table from "../components/table.jsx";
import Navbar from './navbar';

function Employee(props) {

    const [employee, setEmployee] = useState([]);

    const getEmployee = async () => {
        const response = await fetch("http://localhost:5001/employeeReport");
        const jsonData = await response.json();
        console.log(jsonData)
        console.log("hell")
        setEmployee(jsonData)
    }
    useEffect(() => {
        getEmployee();
    }, [])
    return (
        
        <React.Fragment>
        <Navbar/>    
        <div class='heading'>
            <h1>Employee Report</h1>
        
        </div> 

         <Table data={employee} column={props.column}/> 

        </React.Fragment>
         
    );
}

export default Employee;