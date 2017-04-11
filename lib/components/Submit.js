import React, { Component } from 'react'
import data from './download.json'
export default class Submit extends Component {
  constructor() {
    super();
    this.state = {
      output: data,
    };
  }

  apiCall() {

  }

  render() {
    return (
      <section>
        <DisplayInfo info = {}/>
        <DisplayTemp temp ={}/>
        <Hourly temp = {} time = {}, icon = {}/>
        <TenDay temp = {} day = {}, icon = {}/>
      </section>
    );
  }
}
