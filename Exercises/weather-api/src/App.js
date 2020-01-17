import React, { Component } from "react";
import "./App.css";

import FakeWeather from "./data/FakeWeather.json";
import Search from "./search.js";
import CurrentWeather from "./CurrentWeather";
import WeatherLater from "./WeatherLater";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      WriteCity: "Beirut"
    };
  }
  async ApiInfo(a) {
    const api =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      this.state.WriteCity +
      "&cnt=8&units=metric&appid=571df88d447302a15fda544e0999ffbe";
    const response = await fetch(api);
    const r = await response.json();
    this.setState({
      result: r
    });
  }

  callbackFunction = (call2) => {
    this.setState({ WriteCity: call2 });
    this.ApiInfo(call2);
  }
  async componentDidMount() {
    this.ApiInfo(this.state.WriteCity);
  }

  render() {
    return (
      <div className="app">
        <Search {this.callbackFunction(this.state.WriteCity)} />
        {this.state.result !== null ? <CurrentWeather hum={this.state.result.list[0].main.humidity} /> : "loading"}

        <div className="forecast">
          {this.state.result ? this.state.result.list.map((item, value) => {
            if (value > 0 && value < 8) return <WeatherLater weather_list={item} />;
          }) : "loading"}
        </div>

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
