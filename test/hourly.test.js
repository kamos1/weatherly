import React from 'react';
import { shallow } from 'enzyme';
import Hourly from '../lib/components/Hourly';
import data from '../lib/components/HourlyConditions';
import $ from 'jquery';

describe('hourly', () => {

  it('should render nothing', () => {
    const wrapper = shallow(<Hourly stuff={() => {}}/>);
    expect(wrapper.is('.empty')).toEqual(true)
  });

  it('renders Hourly component', () => {
    const wrapper = shallow(<Hourly stuff={data}/>);
    expect(wrapper.is('.hourlyMain')).toEqual(true)
  });

  it('renders 7 cards', () => {
    const wrapper = shallow(<Hourly stuff={data} />)
    var card1 = wrapper.find('.hourlyForecast div').first();
    var card2 = wrapper.find('.hourlyForecast div').last();

    expect(card1.text()).toEqual('10:00 AM');
    expect(card2.text()).toEqual('4:00 PM');
  })

})
