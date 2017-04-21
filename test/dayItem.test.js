import React from 'react';
import { shallow } from 'enzyme';
import DayItem from '../lib/components/dayItem'
import data from '../lib/components/HourlyConditions';
import $ from 'jquery';

describe('dayItem', () => {
  it('renders the components', () => {
    const wrapper = shallow(<DayItem getWeather={() => { 1, 1, 1, 1 }}/>);

    expect(wrapper.is('.tenDay')).toEqual(true);
  });
})
