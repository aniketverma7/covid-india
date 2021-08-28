import React, { useState ,useEffect } from 'react';
import "./header.css"
import Rotate from 'react-reveal/Rotate';

function Header() {
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    
    useEffect(() => {
        getDateTime();
    }, [])

    const getDateTime=()=>{
        const date = new Date();
        setDate(date.toLocaleDateString());
        setTime(date.toLocaleTimeString());
    }

    return (
        <div className="header">
            <h3 >Covid-19 Tracker India<Rotate><img  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="indian-flag"/></Rotate></h3>
            <p>Current Date : {date}<br/>Current Time : {time}</p>
        </div>
    )
}

export default Header
