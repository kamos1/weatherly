import React from 'react'
import { shallow } from 'enzyme';
import TenDay from '../lib/components/TenDay';
import DayItem from '../lib/components/DayItem';
import data from '../lib/components/10Day';
import $ from 'jquery'

describe('display temp', () => {

  it('renders nothings', () => {
    const wrapper = shallow(<TenDay tenDay={[]}/>);
    expect(wrapper.is('.empty')).toEqual(true)
  });

  it('renders 10 day item components', () => {
    const wrapper = shallow(<TenDay tenDay={data}/>);
    expect(wrapper.is('.tenDaySection')).toEqual(true)
    expect(wrapper.find('.tenDaySection').childAt(10).type()).toEqual('section');
  });

})
