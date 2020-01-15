import React, { Component } from "react";
import rainy from "./img/weather-icons/rain.svg";

class CurrentWeather extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="image-1" src={rainy} alt="weather-logo" />
        <figcaption>Overcast Clouds</figcaption>
        <div className="current weather">
          <div className="temperature">
            <p>
              <b>Temperature </b>10° to 11°
            </p>
          </div>
          <div className="pressure">
            <p>
              <b> Humidity </b>78%
            </p>
            <p>
              {" "}
              <b>Pressure </b>
              {this.props.pres}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// CurrentWeather: [
//   { temperature: "8°", time: "3:00" , img:"src={cloudy} alt=(weather-logo)"},
//   { name: "Luke", content: "Hi", time: "8:10" },
//   { name: "Samar", content: "Hello", time: "8:00" },
//   { name: "Luke", content: "Hi", time: "8:10" },
//   { name: "Samar", content: "Hello", time: "8:00" }
// ],

export default CurrentWeather;
