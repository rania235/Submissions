import React, { Component } from "react";

class Search extends Component {
  state = {
    seahCity: "Beirut",
  }
  giveResult = () => {
    this.props.call1(this.state.seahCityss);
  }
  render() {
    return (
      <>

        <header className="appheader">
          <form className="whattemperature">
            <input className="cityname" type="text" placeholder="Type City Name:" value={this.state.searchCity} onChange={event =>
              this.setState({ searchCity: event.target.value })} />
            <button type="submit" onClick={event =>
              this.giveResult(this.state.searchCity)} value="Find weather" className="find_button">

            </button>
          </form>
        </header>
      </>
    );
  }
}

export default Search;
