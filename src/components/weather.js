import React, { Component } from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFar: true,
      far: this.props.weather.temp
    };

    // This binding is necessary to make `this` work in the callback
    this.changeTemp = this.changeTemp.bind(this);
  }

  changeTemp() {
    this.setState({
      isFar: !this.state.isFar,
      far: this.props.weather.temp + "F",
      cel: ((this.props.weather.temp - 32) * 5/9) + "C"
    });
  }

  componentWillMount(){
    this.setState({
      far: this.props.weather.temp + "F",
      cel: ((this.props.weather.temp - 32) * 5/9) + "C"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.weather.isLoading ? "Loading" : "Weather"}</h1>
        <p>{this.props.weather.country}</p>
        <p onClick={this.changeTemp}>
        {this.state.isFar ? this.state.far: this.state.cel}
        </p>
        <p>{this.props.weather.main}</p>
        <p>{this.props.weather.icon}</p>
      </div>
    );
  }
}
