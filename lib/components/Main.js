import React, { Component } from 'react';
import Weatherly from './Weatherly';
// import key from './key.js'




export default class Main extends Component {
  render() {
    return (
      <section>
        <h1 className='appTitle'>Weatherly</h1>
        <div>
          <Weatherly/>
        </div>
      </section>
    );
  }
}
