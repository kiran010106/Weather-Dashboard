import React from "react";
import "../style.css";
import Sunrise from "../assets/sunrise-white 1.png";
import Sunset from "../assets/sunset-white 1.png"
import Clear from "../assets/clear 1.png"
import Humidity from "../assets/humidity 1.png"
import Wind from "../assets/wind 1.png"
import Pressure from "../assets/pressure-white 1.png"
import Uv from "../assets/uv-white 1.png"
const WeatherDetails = () => {
  return (
    <div className="card weather-details">
      <p className="degree">24°C</p>
      <div className="d-flex">
        <span className="feels-like">Feels like:</span>
        <span className="feels-like-degree">22°C</span>
      </div>
      <div className="d-flex Sunrise">
        <img className="img-sunrise" src={Sunrise} alt="" />
        <div className="d-flex flex-column sunrise-detail">
          <span className="sunrise-name">Sunrise</span>
          <span className="sunrise-time">06:37 AM</span>
        </div>
      </div>
      <div className="d-flex Sunset">
        <img className="img-sunset" src={Sunset} alt="" />
        <div className="d-flex flex-column sunset-detail">
          <span className="sunset-name">Sunset</span>
          <span className="sunset-time">20:37 AM</span>
        </div>
      </div> 
      <div >
      <img className="clear"src={Clear} alt="" />
      <p className="clear-name">Sunny</p>
      </div>
      <div className="d-flex flex-column humidity">
        <img className="humidity-img" src={Humidity} alt="" />
        <span className="humidity-value">41%</span>
        <span className="humidity-name">Humidity</span>
      </div>
      {/* <div>
      <img src={Wind} alt="" />
        <span></span>
        <span></span>
      </div>
      <div>
      <img src={Pressure} alt="" />
        <span></span>
        <span></span>
      </div>
      <div>
      <img src={Uv} alt="" />
        <span></span>
        <span></span>
      </div> */}
    </div>
  );
};

export default WeatherDetails;
