import forecastData from '../Images/forecastData.png';
import "../Styles/Forecast.css";


function Forecast() {

    return(
        <div className="card">
            <div className="chart">
                <img src={forecastData} className="forecast" alt="forecastedData"></img>
            </div>
            <div className="chartCaption">
                <p>Use of Long Short-Term Memory in order to predict the foot traffic of the next thirty days</p>
            </div>
        </div>
    );
}

export default Forecast;