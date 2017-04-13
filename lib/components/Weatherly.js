import React, { Component } from 'react';
import Input from './Input';
import DisplayTemp from './DisplayTemp';
import Hourly from './Hourly';
import TenDay from './TenDay';
import key from './key';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      hourly: [],
      tenDay: [],
    };
  }
  
  getWeather(location) {
    if (this.state.hourly.length) {
      this.state.hourly.shift();
      this.state.tenDay.shift();
    }
    $.get(`http://api.wunderground.com/api/${key}/hourly10day${location}.json`).then((hourlyWeather) => {
      this.state.hourly.push(hourlyWeather);
      this.setState({
        weather: this.state.hourly,
      });
    }); $.get(`http://api.wunderground.com/api/${key}/forecast10day${location}.json`).then((tenDayWeather) => {
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
