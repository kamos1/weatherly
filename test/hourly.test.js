import React from 'react';
import { shallow } from 'enzyme';
import Hourly from '../lib/components/Hourly';
import data from '../lib/components/HourlyConditions';
import $ from 'jquery';

describe('hourly', () => {
  it('should render nothing', () => {
    const wrapper = shallow(<Hourly hourly={() => {}}/>);

    expect(wrapper.is('.empty')).toEqual(true);
  });

  it('renders Hourly component', () => {
    const wrapper = shallow(<Hourly hourly={data}/>);

    expect(wrapper.is('.hourlyMain')).toEqual(true);
  });

  it('check that the first and last cards are 7 hours apart', () => {
    const wrapper = shallow(<Hourly hourly={data} />)
    let card1 = wrapper.find('.hourlyForecast div').first();
    let card2 = wrapper.find('.hourlyForecast div').last();

    expect(card1.text()).toEqual('10:00 AM');
    expect(card2.text()).toEqual('4:00 PM');
  })

  it('renders 7 day items', () => {
    const wrapper = shallow(<Hourly hourly={data}/>);

    expect(wrapper.find('.hourlyForecast').length).toEqual(7);
  });


})
