import React from 'react'
import { shallow } from 'enzyme';
import DisplayTemp from '../lib/components/DisplayTemp';
import data from '../lib/components/HourlyConditions';
import $ from 'jquery'

describe('display temp', () => {

  it('renders openingStuff', () => {
    const wrapper = shallow(<DisplayTemp stuff={() => {}}/>);
    expect(wrapper.is('.openingStuff')).toEqual(true)
  });

  it('renders display', () => {
    const wrapper = shallow(<DisplayTemp stuff={data}/>);
    expect(wrapper.is('.display')).toEqual(true)
  });

  it('renders the correct temp', () => {
    const wrapper = shallow(<DisplayTemp stuff={data}/>);
    expect(wrapper.is('.display')).toEqual(true)
    const element = wrapper.find('.currentTemp');
    expect(element.text()).toEqual('Current Temperature: 59 ℉');
  })



})
