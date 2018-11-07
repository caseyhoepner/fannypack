import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockWeatherData } from './testMocks';
import { WeatherResults, mapStateToProps } from '../containers/WeatherResults'
import * as Actions from '../actions'
jest.mock('uuid', () => jest.fn(() => 1));

describe('WeatherResults', () => {
  describe('WeatherResults Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<WeatherResults weatherData={[mockWeatherData]} isLoaded={true}/>);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot', () => {
      let wrapper = shallow(<WeatherResults weatherData={[mockWeatherData]} isLoaded={false}/>);
      
      expect(wrapper).toMatchSnapshot()
    })

  describe('mapStateToProps', () => {
    it('should parse the weatherData from state', () => {
      const mockState = {
        weatherData: mockWeatherData
      }

      const expected = mockWeatherData

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.weatherData).toEqual(expected)
    })

    it('should parse isLoaded from state', () => {
      const mockState = {
        isLoaded: true
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.isLoaded).toEqual(true)
    })
  })
})
})