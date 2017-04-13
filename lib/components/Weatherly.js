import React, { Component } from 'react';
import Input from './Input';
import DisplayTemp from './DisplayTemp';
import DisplayInfo from './DisplayInfo';
import Hourly from './Hourly';
import TenDay from './TenDay';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      hourly: [],
      tenDay: [],
    };
  }

  getWeather(location) {
    const hourly =
    $.get(`http://api.wunderground.com/api/8997fd823fcda346/hourly10day/q/CO/${location.location}.json`).then((hourlyWeather) => {
      this.state.hourly.push(hourlyWeather);
      this.setState({
        weather: this.state.hourly,
      });
    });
    const tenDay = $.get(`http://api.wunderground.com/api/8997fd823fcda346/forecast10day/q/CO/${location.location}.json`).then((tenDayWeather) => {
      this.state.tenDay.push(tenDayWeather);
      this.setState({
        weather: this.state.tenDay,
      });
    });
  }

  render() {
    return (
      <div>
        <Input getWeather = {this.getWeather.bind(this)}/>
        <div>
          <DisplayTemp stuff = {this.state.hourly}/>
          <Hourly stuff = {this.state.hourly}/>
          <TenDay tenDay = {this.state.tenDay}/>
        </div>
      </div>
    );
  }
}
