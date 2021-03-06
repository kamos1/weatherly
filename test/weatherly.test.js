import React from 'react';
import { shallow } from 'enzyme';
import Weatherly from '../lib/components/Weatherly';
import Input from '../lib/components/Input';
import DisplayTemp from '../lib/components/DisplayTemp';
import Hourly from '../lib/components/Hourly';
import TenDay from '../lib/components/TenDay';
import $ from 'jquery';

describe('weatherly', () => {
  it('renders the components', () => {
    const wrapper = shallow(<Weatherly />);

    expect(wrapper.is('.main')).toEqual(true);
    expect(wrapper.containsMatchingElement(<Input />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<DisplayTemp />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Hourly />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TenDay />)).toEqual(true);
  });
});
