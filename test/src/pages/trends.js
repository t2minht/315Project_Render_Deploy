import React, { Component, useState } from 'react';
import Table from '../components/table';


function Trends(props) {
    const [trendsTable, setTrendsTable] = useState([1,1,1]);
    const [beginDate, setBeginDate] = useState('Start');
    const [endDate, setEndDate] = useState('End');

    const getTrendsData = async (e) => {
        e.preventDefault();
        //console.log(beginDate);
        let itemNames = [];
        let itemCounts = [];
        
        let rData = []
        // var url = new Url('http://localhost:5001/excessReport');
        // var params = {"beginDate": beginDate, "endDate": endDate};
        // url.search = new URLSearchParams(params).toString();
        const menuResponse = await fetch("http://localhost:5001/menu");
        const menuJsonData = await menuResponse.json();

        for(let i = 0; i < menuJsonData.length; i++) {
            itemNames.push(menuJsonData[i]["name"]);
        }
        
        for(let i of itemNames) {
            console.log(i)
            const drinkResponse = await fetch(`http://localhost:5001/drinks/${i}`);
            const drinkJsonData = await drinkResponse.json();

            const pizzaResponse = await fetch(`http://localhost:5001/pizza/${i}`);
            const pizzaJsonData = await pizzaResponse.json();

            let itemCount = 0;
            let pizzaCount = 0;
            let drinkCount = 0;
            let temp1 = beginDate.replace("-","");
            let temp2 = endDate.replace("-","");
            temp1 = temp1.replace("-", "");
            temp2 = temp2.replace("-","");
            

            for(let pizza of pizzaJsonData) {
                
                if(temp1.charAt(0) == '1' || temp2.charAt(0) == '1') {
                    
                    let idCheck = (pizza["id"].toString()).substring(0,4);
                    let finalCheck = idCheck;
                    if(idCheck.charAt(0) != '1') {
                        finalCheck = '0' + idCheck.substring(0,3);
                    }
                    
                    if(parseInt(finalCheck,10) >= parseInt(temp1.substring(0,4), 10) && parseInt(finalCheck, 10) <= parseInt(temp2.substring(0,4), 10)) {
                        pizzaCount++;
                      }
                }
                
                else {
                    let idCheck = (pizza["id"].toString()).substring(0,3);
                    if(parseInt(idCheck, 10) >= parseInt(temp1.substring(1,4), 10) && parseInt(idCheck, 10) <= parseInt(temp2.substring(1,4), 10)) {
                      pizzaCount++;
                    }
                }
            }
            for(let drink of drinkJsonData) {
                if(temp1.charAt(0) == '1' || temp2.charAt(0) == '1') {
                    
                    let idCheck = (drink["id"].toString()).substring(0,4);
                    let finalCheck = idCheck;
                    if(idCheck.charAt(0) != '1') {
                        finalCheck = '0' + idCheck.substring(0,3);
                    }
                    
                    if(parseInt(finalCheck,10) >= parseInt(temp1.substring(0,4), 10) && parseInt(finalCheck, 10) <= parseInt(temp2.substring(0,4), 10)) {
                        drinkCount++;
                      }
                }
                
                else {
                    let idCheck = (drink["id"].toString()).substring(0,3);
                    if(parseInt(idCheck, 10) >= parseInt(temp1.substring(1,4), 10) && parseInt(idCheck, 10) <= parseInt(temp2.substring(1,4), 10)) {
                      drinkCount++;
                    }
                }
            }
            console.log(" ", pizzaCount, drinkCount, "\n")
            itemCount = Math.max(pizzaCount, drinkCount);
            itemCounts.push({'name':i, 'count':itemCount})
            
        }
        
        setTrendsTable(itemCounts);
    }
    return (
        <React.Fragment>
            <h1>Enter start and end date (MM-DD-YYYY)</h1>
            <form>
                <input type="text" className='form-control1' value={beginDate} onChange={e => setBeginDate(e.target.value)}/>
                <input type="text" className='form-control1' value={endDate} onChange={e => setEndDate(e.target.value)}/>
                <button onClick={getTrendsData}>Generate Report</button>
            </form>
            <Table data={trendsTable} column={props.column}></Table> 
        </React.Fragment>
    );
}

export default Trends;