import React from 'react'
import { shallow } from 'enzyme';
import Input from '../lib/components/Input'
import $ from 'jquery'


it('should update state.location when submit is clicked', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Input getWeather={() => { mock }}/>);
  const input = wrapper.find('input[type="text"]');
  const btn = wrapper.find('#submitButton');

  input.simulate('change', { target: { value: 'oreos' } });
  expect(wrapper.state('location')).toEqual('oreos');
  btn.simulate('click');
  expect(wrapper.state('location')).toEqual('');
});

it('should call componentDidMount', () => {
    let spy = jest.spyOn(Input.prototype, 'componentDidMount')
    let wrapper = mount(<Input getWeather={() => {}} />)

    expect(spy).toHaveBeenCalled();
});

it('should call submit', () => {
  let spy = jest.spyOn(Input.prototype, 'submit')
  let wrapper = mount(<Input getWeather={() => {}} />)
  let button = wrapper.find('#submitButton')

  button.simulate('click');

  expect(spy).toHaveBeenCalled();
})
