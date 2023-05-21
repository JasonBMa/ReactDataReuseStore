import React from 'react';
import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import { UserData } from './Data';
import Keypoints from './Components/Keypoints';

import './Styles/App.css';

function App() {

  //Creating a map of 
  const [userData,setUserData] = useState({
    labels: UserData.map((data) => data.DateAndTime),
    datasets: [{
      label: "Total Amount of Foot Traffic in an hour",
      data: UserData.map((data) => data.footTraffic),
      backgroundColor: '#d46844',
      borderColor: "black",
      borderWidth: 2,
    }],
    options: [{

    }]
  });

  return (
    <>
      <Navbar />
      <Banner />

      <div className="graphTitle">
        <p> Happy Feet </p>
        <p> Simulated Data Visualized </p>
      </div>

      <div className="card">
        <div className="chart">
          <BarChart chartData={userData}/>
        </div>
        <div className="chartCaption">

        </div>
      </div>

      <div className="doubleChartLayout">
        <div className="doubleChartItem1">
          <BarChart chartData={userData}/>
        </div>
        <div className="doubleChartItem2">
          <LineChart chartData={userData}/>
        </div>
      </div>
    </>
  );
}

export default App;
