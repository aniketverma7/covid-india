import React, { useState } from 'react'
import "./table.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Bounce from 'react-reveal/Bounce';
import SearchIcon from '@material-ui/icons/Search';


function Table({data}) {

    const[searchData , setSearchData] = useState("");
    const[tosort,setToSort]=useState(false);
    const tableData = data;
    const sortData=(wise)=>{
        if(wise==="confirmed"){
            if(tosort===true){
                tableData.sort((a,b)=>{
                    return b.confirmed-a.confirmed;
                })
               
            }
            if(tosort===false){
                tableData.sort((a,b)=>{
                    return a.confirmed-b.confirmed;
                })
            }
        }
        else if(wise==="active"){
            if(tosort===true){
                tableData.sort((a,b)=>{
                    return b.active-a.active;
                })
               
            }
            if(tosort===false){
                tableData.sort((a,b)=>{
                    return a.active-b.active;
                })
            }
        }
        else if(wise==="recovered"){
            if(tosort===true){
                tableData.sort((a,b)=>{
                    return b.recovered-a.recovered;
                })
               
            }
            if(tosort===false){
                tableData.sort((a,b)=>{
                    return a.recovered-b.recovered;
                })
            }
        }
        else if(wise==="deaths"){
            if(tosort===true){
                tableData.sort((a,b)=>{
                    return b.deaths-a.deaths;
                })
               
            }
            if(tosort===false){
                tableData.sort((a,b)=>{
                    return a.deaths-b.deaths;
                })
            }
        }
        
        setToSort(!tosort)
    
    }
    
    console.log(searchData);
    return (
        <div className="table">
        <div className="search_bar">
        <SearchIcon className="search_icon"/>
            <input 
                type="text" 
                placeholder="Search State" 
                onChange={event=>{setSearchData(event.target.value)}}
            />
        </div>
        
            <table>
                <thead>
                <tr>
                    <th>State Name</th>
                    <th onClick={()=>{ sortData("confirmed") }}>Total Cases <KeyboardArrowDownIcon/></th>
                    <th onClick={()=>{ sortData("active") }}>Active Cases <KeyboardArrowDownIcon/></th>
                    <th onClick={()=>{ sortData("recovered") }}>Recoverd <KeyboardArrowDownIcon/></th>
                    <th onClick={()=>{ sortData("deaths") }}>Deaths <KeyboardArrowDownIcon/></th>
                </tr>
                </thead>
                <tbody>
                {
                    tableData.filter((state)=>{
                        if(searchData===""){
                            return state;
                        }
                        else if(state.state.toLowerCase().includes(searchData.toLowerCase())){
                            return state;
                        }
                    }).map((state,key)=>{
                    if(state.state!=="Total" && state.state!=="State Unassigned"){
                        return(
                            <Bounce left>
                        <tr key={key}>
                            <td>{state.state}</td>
                            <td>{state.confirmed}</td>
                            <td>{state.active}</td>
                            <td>{state.recovered}</td>
                            <td>{state.deaths}</td>
                        </tr>
                        </Bounce>
                    )
                    }
                    return console.log(tosort);
                })  
                    
                }
                </tbody>

            </table>
        </div>
    )
}

export default Table
