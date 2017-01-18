import React, { Component } from 'react';
import axios from 'axios';

import Weather from './weather';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: {
        country: "Loading",
        main: "Loading",
        icon: "Loading",
        temp: 0,
        isLoading: true
      }
    }
  }

  componentWillMount() {
    //  Get current position and api call when page loads
    let prom = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
          resolve(position)
      });
    });

    prom.then((value) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${value.coords.latitude}&lon=${value.coords.longitude}&&APPID=265aef4d63230a48ab0446fe91afec9a`).then(res => {
        var weather = {
          country: res.data.sys.country,
          main: res.data.weather[0].main,
          icon: res.data.weather[0].icon,
          temp: (res.data.main.temp * 9/5) - 459.67,
          isLoading: false
        }
        this.setState({weather: weather});
      });
    })
  }
  render() {
    return (
      <div>
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}
