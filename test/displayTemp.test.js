import React from 'react'
import { shallow } from 'enzyme';
import DisplayTemp from '../lib/components/DisplayTemp';
import data from '../lib/components/San_Francisco';
import data2 from '../lib/components/San_Fran';
import $ from 'jquery'
require('locus')

describe('display temp', () => {
  const mock = jest.fn();
  const wrapper = shallow(<DisplayTemp stuff={(data2)}/>);
  // console.log(wrapper.debug())
  it('renders openingStuff', () => {
    // console.log(wrapper.find('.openingStuff').length)
    expect(wrapper.is('.openingStuff')).toEqual(true)
  });
  it('renders openingStuff', () => {
    expect(wrapper.is('.rendered')).toEqual(true)
  });

})
