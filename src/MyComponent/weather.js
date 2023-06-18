import React, { useEffect, useState } from "react";
import "./weather.css";
import Weathercard from "./Weathercard";

const Weather = () => {
  const [searchinfo, setSearchInfo] = useState("modasa");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchinfo}&units=metric&appid=7c7a67b3eaacbab86b873d7009bff696`;
      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeather = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeather);
    } catch (err) {
      console.log(err);
    }

    if (searchinfo === "") {
      alert("Please, Enter City Name.");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
    <div className="animation1"></div>
      <div className="search_div container">
        <div className="search">
          <input
            type="text"
            placeholder="Search.."
            autoFocus
            id="search"
            value={searchinfo}
            onChange={(e) => setSearchInfo(e.target.value)}
          />{" "}
          <button className="searchBtn" onClick={getWeatherInfo}>
            {" "}
            Search{" "}
          </button>{" "}
        </div>
      </div>

      <Weathercard tempInfo={tempInfo} />

      <div className="animation"></div>
    </>
  );
};

export default Weather;
