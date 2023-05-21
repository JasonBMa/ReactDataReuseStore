import "../Styles/DoubleCharts.css";
import { useState } from 'react';
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { UserData } from '../Data';
function DoubleCharts() {

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
    });

    return(
        <div className="doubleChartLayout">
            <div className="doubleChartItem1">
                <BarChart chartData={userData}/>
            </div>
            <div className="doubleChartItem2">
                <LineChart chartData={userData}/>
            </div>
      </div>
    );
}

export default DoubleCharts;