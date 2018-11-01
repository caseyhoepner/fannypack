import React from 'react';
import { shallow } from 'enzyme';
import PackingList from '../components/PackingList';

describe ('PackingList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PackingList />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})