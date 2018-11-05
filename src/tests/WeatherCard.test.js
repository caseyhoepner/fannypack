import React from 'react';
import { shallow } from 'enzyme';
import { WeatherCard, mapStateToProps } from '../containers/WeatherCard';
import { mockWeatherData } from './testMocks';

describe('WeatherCard', () => {

  describe('WeatherCard Component', () => {

    it('should match the snapshot', () => {
      const wrapper = shallow(<WeatherCard 
                          lowTemp={80}
                          highTemp={81} 
                          icon='clear-day'
                          city='Denver'
                        />);
      expect(wrapper).toMatchSnapshot()
    })

      it('should match the snapshot', () => {
      const wrapper = shallow(<WeatherCard 
                          lowTemp={71}
                          highTemp={79} 
                          icon='clear-day'
                          city='Denver'
                        />);
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot', () => {
      const wrapper = shallow(<WeatherCard 
                          lowTemp={41}
                          highTemp={69} 
                          icon='clear-day'
                          city='Denver'
                        />);
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot', () => {
      const wrapper = shallow(<WeatherCard 
                          lowTemp={38}
                          highTemp={39} 
                          icon='clear-day'
                          city='Denver'
                        />);
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the weatherData from state', () => {
      const mockState = {
        isLoggedIn: true,
        weatherData: mockWeatherData
      }
      const expected = mockWeatherData
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.weatherData).toEqual(expected)
    })
  })
})