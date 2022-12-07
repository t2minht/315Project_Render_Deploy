import React, { useState, useEffect } from 'react';
import Table from "../components/table.jsx";
import Navbar from './navbar';
const {Url} = require('url');

function ExcessReport(props) {
    const [excessTable, setExcessTable] = useState([1,1,1]);
    const [beginDate, setBeginDate] = useState('YYYY-MM-DD');
    const [endDate, setEndDate] = useState('YYYY-MM-DD');
    

    const getExcessData = async (e) => {
        e.preventDefault();
        let rData = []
        var url = new Url('http://localhost:5001/excessReport');
        var params = {"beginDate": beginDate, "endDate": endDate};
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(`http://localhost:5001/excessReport/${beginDate}/${endDate}`);
        const jsonData = await response.json();
        var data = new Set()
        for (let i = 0; i<jsonData.length; ++i){
            if ((jsonData[i]["id"]-901001 >= 7 && jsonData[i]["id"]-901001 <= 33) || i % 33 == 0) {
                data.add(jsonData[i]["id"]%33+20);
            }
        }
        console.log(data);
        
        for (let x of data){
            const response2 = await fetch(`http://localhost:5001/id/${x}`).then((res) => {
                res.json().then((jsonData2) => {
                    console.log(jsonData2)
                    rData.push({"id": jsonData2[0]["id"], "name": jsonData2[0]["name"], "count": jsonData2[0]["count"]});
                    console.log(rData);
                });
            });
                    
            
            
        }
        setExcessTable(rData);
    }

    return ( 
        <React.Fragment>
            <Navbar/>
            <div class='heading'>
                <h1>Excess Report</h1>
                <p>Veiw the items in the inventory that were excess over a time period</p>
                <hr></hr>
                <br></br><br></br>
            </div>
            <Table data={excessTable} column={props.column}></Table> 
            <br></br><br></br>
            <h1>Generate Report</h1>
            <p>Enter start and end date for desired time period.</p>
            <br></br>
            <form>
                <label for="start">Start Date:</label>
                <input type="text" className='form-control1' id='start' value={beginDate} onChange={e => setBeginDate(e.target.value)}/>
                <label for="end">End Date:</label>
                <input type="text" className='form-control1' id='end' value={endDate} onChange={e => setEndDate(e.target.value)}/>
                <br></br><br></br><br></br>
                <button onClick={getExcessData} class='button'>Generate Report</button>
            </form>
        </React.Fragment>
        
    );
}
export default ExcessReport;