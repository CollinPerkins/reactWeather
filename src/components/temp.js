import React, { Component } from 'react';

export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFar: true
    };

    this.changeTemp = this.changeTemp.bind(this);
  }

  convertCel() {
    return ((this.props.temp - 32) * 5/9);
  }

  changeTemp() {
    this.setState({
      isFar: !this.state.isFar,
      cel: this.convertCel()
    });
  }


  render() {
    return (
      <div>
        <p onClick={this.changeTemp}>
          {this.state.isFar ? this.props.temp.toFixed() : this.state.cel.toFixed()}
          {this.state.isFar ? "F" : "C"}
        </p>
      </div>
    );
  }
}
