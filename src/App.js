import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Table from "./components/Table";
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function App() {


  useEffect(()=>{
    getData();
  },[]);

  
  const [data,setData]= useState([]);
  const[tableData,setTableData]=useState([]);
  
  const url="https://data.covid19india.org/data.json";

  const  getData = async ()=>{
    try{
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.statewise[0]);
      setTableData(jsonData.statewise);
    }
    catch(err){
      console.log(err);
    }
  }

  
  return (
    <>
    <Fade top>
    <Header/>
    </Fade>
   <div className="app-div">
     <Zoom> 
        <h2 className="heading">Total Cases in India</h2> 
      </Zoom>
      <div className="cards">
      <Fade left>
        <Card title="Total Cases" styles ="2px solid black" textColor="black" total={data.confirmed} />
        <Card title="Active Cases" styles ="2px solid #2b70e0" textColor="#2b70e0" total={data.active}/>
      </Fade>
      <Fade right>
        <Card title="Recoverd" styles ="2px solid #118a49" textColor="#118a49" total={data.recovered}/>
        <Card title="Deaths" styles ="2px solid #ba1111" textColor="#ba1111" total={data.deaths}/>
      </Fade>
      </div>
      <Zoom>
        <h2 className="heading">Statewise List of Covid-19 Details</h2>
      </Zoom>
      <div className="table-div">
      <Table data={tableData}/>
      </div>
      
   </div>
    </>
  ) 
}

export default App;
