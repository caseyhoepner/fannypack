import React from 'react';
import { shallow } from 'enzyme';
import { TravelForm } from '../containers/TravelForm';

describe ('TravelForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TravelForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})