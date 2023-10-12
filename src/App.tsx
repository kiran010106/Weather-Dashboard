import React from "react";
// import "./style.css";
import SearchBar from "./components/searchBar";
import Loaction from "./components/Loaction";
import WeatherDetails from "./components/weatherDetails";
import DaysForecast from "./components/daysForecast";
import HourlyForecast from "./components/hourlyForecast";
const App: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <SearchBar />
        <Loaction />
        <WeatherDetails />
        <DaysForecast />
        <HourlyForecast />
      </div>
      </>
  );
};

export default App;
