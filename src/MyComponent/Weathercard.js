import React, { useEffect, useState } from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = React.useState('');

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState('wi-cloudy');
                    break;
                case "Haze":
                    setWeatherState('wi-fog');
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Rain":
                    setWeatherState("wi-rain-mix");
                    break;
                case "Smoke":
                    setWeatherState("wi-smoke");
                    break;
                default:
                    setWeatherState("wi-cloudy");
                    break;
            }
        };
    }, [weatherMood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()} `

    // console.log(weatherState)
    return (
        <article className="weather_div" >
            <div className="icon " >
                <i className={`wi ${weatherState} fa-4x`} > </i>
            </div>
            <div className="temp-date" >
                <div className="temp" >
                    <div className="temperatur" > {temp}° </div>
                    <div className="description" >
                        <div className="condition" > {weatherMood} </div>
                        <div className="place" > {name}, {country} </div>
                    </div>
                </div>
                <div className="date" > {new Date().toLocaleString()}
                </div>
            </div>

            <div className="footer_div" >
                <div className="footer" >
                    <div className="sunset comnfooter" >
                        <p > < i class=" wi wi-sunset footerIcon" > </i></p >
                        <p > {timeStr} < br /> Sunset </p>
                    </div>
                    <div className="sunset comnfooter" >
                        <p > < i class=" wi wi-humidity footerIcon" > </i></p >
                        <p > {humidity} < br /> Humidity </p>
                    </div>
                    <div className="sunset comnfooter" >
                        <p > < i class=" wi wi-rain footerIcon" > </i></p >
                        <p > {pressure} < br /> Pressure </p>
                    </div>
                    <div className="sunset comnfooter" >
                        <p> < i class=" wi wi-strong-wind footerIcon" > </i></p>
                        <p> {speed} < br /> Speed </p>
                    </div>
                </div >
            </div>
        </article>

    )
}

export default Weathercard;