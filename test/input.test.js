import React from 'react'
import { shallow, mount } from 'enzyme';
import Input from '../lib/components/Input'
import $ from 'jquery'


it('state.input should change when input is changed', () => {
  var mock = jest.fn()
  var wrapper = shallow(<Input submit={()=>{mock}} />)
  // var input = wrapper.find('div');  				// css selectors
  var input = wrapper.find('input[type="text"]');  	// css selectors
  var btn = wrapper.find('#submitButton');   		// id selector
  var input = wrapper.find('#mainInput'); 		// class selectors

  input.simulate('change', { target: { value: 'oreos' } });
  btn.simulate('click');

  expect(wrapper.state('input')).toEqual('oreos')
});
