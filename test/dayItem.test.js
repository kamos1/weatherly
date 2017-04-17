import React from 'react'
import { shallow } from 'enzyme';
import DayItem from '../lib/components/dayItem'
import data from '../lib/components/data'
import $ from 'jquery'

describe('dayItem', () => {
  const mock = jest.fn();
  const wrapper = shallow(<DayItem stuff={() => {mock}}/>);
  const weather  = [data];

  it('renders the components', () => {
    expect(wrapper.is('.tenDay')).toEqual(true)
  });

  
})
