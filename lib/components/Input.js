import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    };
  }

  submit() {
    this.props.getWeather(this.state);
    this.setState({ location: '' });
  }

  render() {
    return (
      <div>
        <input className='inputs'
            id='submitButton'
            type = "submit"
            onClick = {this.submit.bind(this)}
            // disabled = {!this.state.input}
          />
        <input  className='inputs'
          id='mainInput'
          value = {this.state.input}
          placeholder = 'Enter City, State or Zipcode'
          onChange = { (event) => { this.setState({ location: event.target.value }); }}
        />
      </div>
    );
  }
}
