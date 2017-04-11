import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div>
        <input value = {this.state.input}
          placeholder = 'Enter City, State or Zipcode'
          onChange = { (event) => { this.setState({ input: event.target.value }); }}
        />
        <Submit input = {this.state.input}/>
      </div>

    );
  }
}
