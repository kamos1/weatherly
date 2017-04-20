import React, { Component } from 'react';
import $ from 'jquery'

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      url: '',
    };
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    this.setState({ url: location ? location : '' }, () => {
      this.props.getWeather(location);
    });
  }

  submit() {
    this.setState({ location: '' });
    this.props.getWeather(this.state.url);
    localStorage.setItem('location', this.state.url);
  }

  render() {
    return (
      <div>
        <input className='inputs'
          id='mainInput'
          type = 'text'
          value = {this.state.location}
          placeholder = 'Enter City, State or Zipcode'
          onChange = { (event) => {
            this.setState({ location: event.target.value });
            $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${this.state.location}`).then((response) => {
              this.setState({ url: response.RESULTS[0].l });
            }
            );
          }}
        />
        <input className='inputs'
          id='submitButton'
          type = "submit"
          onClick = {this.submit.bind(this)}
          disabled = {!this.state.location}
        />
      </div>
    );
  }
}
