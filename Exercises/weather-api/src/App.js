import React, { Component } from "react";
import "./App.css";

import FakeWeather from "./data/FakeWeather.json";
import Search from "./search.js";
import CurrentWeather from "./CurrentWeather";
import WeatherLater from "./WeatherLater";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        {console.log(FakeWeather.list[0].main.pressure)}
        <Search />
        <CurrentWeather pres={FakeWeather.list[0].main.pressure} />
        <div className="forecast">
          {FakeWeather.list.map((item, value) => {
            if (value > 0 && value < 8) return <WeatherLater weather={item} />;
          })}
        </div>

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
