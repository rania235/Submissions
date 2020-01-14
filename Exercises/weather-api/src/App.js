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
        <Search />
        <CurrentWeather />
        <WeatherLater />

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
