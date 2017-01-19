import React, { Component } from 'react';
import axios from 'axios';

import Weather from './weather';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: {
        country: "",
        main: "",
        icon: "",
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

    // Use promise return to get json data from weather api.
    prom.then((value) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${value.coords.latitude}&lon=${value.coords.longitude}&&APPID=265aef4d63230a48ab0446fe91afec9a`).then(res => {
        var weather = {
          country: res.data.sys.country,
          city: res.data.name,
          main: res.data.weather[0].main,
          iconId: "wi wi-owm-" + res.data.weather[0].id,
          temp: (res.data.main.temp * 9/5) - 459.67,
          isLoading: false
        }
        console.log(res);
        this.setState({weather: weather});
      });
    })
  }

  render() {
    return (
      <div>
        <Weather weather={this.state.weather} />
        <h3><a href="https://github.com/CollinPerkins/reactWeather" target="_blank">Github Link for React Weather App</a></h3>
        <p>P.S. Make sure you allow connection in order to get data.</p>
      </div>
    );
  }
}
