import React, { Component } from 'react';
import Temp from './temp';

export default class Weather extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isFar: true,
  //     far: this.props.weather.temp
  //   };

  render() {
    return (
      <div>
        <h1>{this.props.weather.isLoading ? "Loading" : "Weather"}</h1>
        <p>{this.props.weather.country}</p>
        <p>{this.props.weather.city}</p>
        <Temp temp={this.props.weather.temp} />
        <p>{this.props.weather.main}</p>
        <i className={this.props.weather.iconId}></i>
      </div>
    );
  }
}
