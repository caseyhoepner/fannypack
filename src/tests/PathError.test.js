import React from 'react';
import { shallow } from 'enzyme';
import PathError from '../components/PathError';

describe ('PathError', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PathError />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})