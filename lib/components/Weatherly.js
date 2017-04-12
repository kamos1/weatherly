import React, { Component } from 'react';
import Input from './Input';
import DisplayTemp from './DisplayTemp';
import DisplayInfo from './DisplayInfo';
import Hourly from './Hourly';
import TenDay from './TenDay';
import data from './download.js';



export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
    };
  }

  getWeather(location) {
    const api =
    $.get(`http://api.wunderground.com/api/8997fd823fcda346/hourly10day/q/CO/${location.location}.json`).then((weather) => {
      this.state.weather.push(weather)
      this.setState({
        weather: this.state.weather,
      })
    })
  }

  render() {
    return (
      <div>
        <Input getWeather = {this.getWeather.bind(this)}/>
        <div>
          <DisplayTemp stuff = {this.state.weather}/>
          <DisplayInfo stuff = {this.state.weather}/>
          <Hourly />
          <TenDay />
        </div>
      </div>
    );
  }
}
