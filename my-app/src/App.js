import React from 'react';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import DoubleCharts from './Components/DoubleCharts';
import Forecast from './Components/Forecast';
import './Styles/App.css';

function App() {

  return (
    <>
      <Navbar />
      <Banner />

      <div className="graphTitle">
        <p> Simulated Data Visualized </p>
      </div>
      <Forecast />

      <DoubleCharts />
    </>
  );
}

export default App;
