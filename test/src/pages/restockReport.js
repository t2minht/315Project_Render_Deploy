import React, { useState, useEffect } from 'react';
import Table from '../components/table';

function RestockReport(props) {
    const [restockTable, setRestockTable] = useState([]);

    const getRestockData = async () => {
        const response = await fetch("http://localhost:5001/restockReport");
        const jsonData = await response.json();
        var data = []
        for (let x of jsonData){
            let amt = Math.floor(Math.random() * 500) + 500;
            data.push({"name": x["name"], "count": x["count"], "amount": amt})
        }
        setRestockTable(data);
        
    }

    useEffect(() => {
        getRestockData();
    }, []);

    return ( <Table data={restockTable} column={props.column}></Table> );
}

export default RestockReport;