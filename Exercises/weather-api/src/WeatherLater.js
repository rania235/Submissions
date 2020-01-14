import React, { Component } from "react";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import storm from "./img/weather-icons/storm.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import snow from "./img/weather-icons/snow.svg";

class WeatherLater extends Component {
  render() {
    return (
      <div className="forecast">
        <div className="forecast-details">
          <p>03:00</p>
          <img className="image-2" src={cloudy} alt="weather-logo" />
          <p>8°C</p>
        </div>
        <div className="forecast-details">
          <p>06:00</p>
          <img className="image-2" src={drizzle} alt="weather-logo" />
          <p>9°C</p>
        </div>
        <div className="forecast-details">
          <p>09:00</p>
          <img className="image-2" src={fog} alt="weather-logo" />
          <p>14°C</p>
        </div>
        <div className="forecast-details">
          <p>12:00</p>
          <img className="image-2" src={storm} alt="weather-logo" />
          <p>17°C</p>
        </div>
        <div className="forecast-details">
          <p>15:00</p>
          <img className="image-2" src={mostlycloudy} alt="weather-logo" />
          <p>18°C</p>
        </div>
        <div className="forecast-details">
          <p>18:00</p>
          <img className="image-2" src={snow} alt="weather-logo" />
          <p>16°C</p>
        </div>
        <div className="forecast-details">
          <p>21:00</p>
          <img className="image-2" src={cloudy} alt="weather-logo" />
          <p>13°C</p>
        </div>
      </div>
    );
  }
}

export default WeatherLater;
