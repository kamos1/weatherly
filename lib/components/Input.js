import React, { Component } from 'react';
import key from './key';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      url: '',
    };
  }

  submit() {
    this.setState({ location: '' });
    this.props.getWeather(this.state.url);
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
        <input className='inputs'
          id='mainInput'
          // value = {this.state.input}
          placeholder = 'Enter City, State or Zipcode'
          onChange = { (event) => {
            this.setState({ location: event.target.value });
            localStorage.setItem('location', event.target.value);
            $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${this.state.location}`).then((response) => {
              this.setState({ url: response.RESULTS[0].l });
            }
          );
          }}
        />
      </div>
    );
  }
}
