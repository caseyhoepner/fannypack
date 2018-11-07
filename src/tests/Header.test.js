import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../containers/Header';
import { mockWeatherData, mockState } from './testMocks';

describe('Header', () => {

  describe ('Header Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot', () => {
      wrapper = shallow(<Header isLoaded='true' />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse isLoaded from state', () => {
      const mockState = {
        isLoaded: true,
        weatherData: mockWeatherData
      }
      const expected = true;
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.isLoaded).toEqual(expected)
    })
  })
})