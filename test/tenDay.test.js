import React from 'react';
import { shallow } from 'enzyme';
import TenDay from '../lib/components/TenDay';
import DayItem from '../lib/components/DayItem';
import data from '../lib/components/10Day';
import $ from 'jquery';

describe('display temp', () => {
  it('renders nothings', () => {
    const wrapper = shallow(<TenDay tenDay={[]}/>);

    expect(wrapper.is('.empty')).toEqual(true);
  });

  it('should check that the 10th child is a section', () => {
    const wrapper = shallow(<TenDay tenDay={data}/>);

    expect(wrapper.is('.tenDaySection')).toEqual(true);
    expect(wrapper.find('.tenDaySection').childAt(9).type()).toEqual('section');
    expect(wrapper.find('DayItem').length).toEqual(10);
  });

  it('renders 10 day items', () => {
    const wrapper = shallow(<TenDay tenDay={data}/>);

    expect(wrapper.find('DayItem').length).toEqual(10);
  });

})
