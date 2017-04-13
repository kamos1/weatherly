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

  // submit() {
  //    // $.get(`http://autocomplete.wunderground.com/aq?query=denver`)
  //    $.getJSON( `http://autocomplete.wunderground.com/aq?cb=?&query=denver` ).then(
  //      (response) => {
  //        console.log(response);
  //        // alert(JSON.parse(response))
  //      }
  //    )
  //    // console.log(this.state.location)
  //    // this.props.locator(this.state)
  //    // this.props.getWeather(this.state);
  //    // this.setState({ location: ‘’ });
  //  }

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
            $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${this.state.location}`).then((response) => {
              this.setState({ url: response.RESULTS[0].l });
              console.log(this.state);
            }
          );
          }}
        />
      </div>
    );
  }
}
