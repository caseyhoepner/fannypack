import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockWeatherData } from './testMocks';
import { TravelForm, mapDispatchToProps } from '../containers/TravelForm'
import * as Actions from '../actions'

describe('TravelForm', () => {
  describe('TravelForm Component', () => {
    let wrapper;
    let setWeather;
    let changeToLoaded;

    beforeEach(() => {
      setWeather = jest.fn()
      changeToLoaded = jest.fn()

      wrapper = shallow(<TravelForm setWeather={setWeather} changeToLoaded={changeToLoaded}/>);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('state should match the snapshot', () => {
      expect(wrapper.state()).toMatchSnapshot()
    })

    it('should call handleChange when city input is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { target: { value: 'something'} }

      wrapper.find('.test-input').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
    })

    it('should update state when handleChange is called', () => {
      const mockEvent = { preventDefault: jest.fn(), target: { name: 'day1', value: 'Denver'} }


      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state('day1')).toBe('Denver')
    })

    it('calls handleSubmit onSubmit of the form', () => {
      const spy = spyOn(wrapper.instance(), 'handleSubmit')
      wrapper.instance().forceUpdate()

      wrapper.find('form').simulate('submit')

      expect(spy).toHaveBeenCalled()
    })

    // it('calls getWeatherData in handleSubmit', () => {
    //   const getWeatherData = jest.fn();

    //   wrapper.instance().handleSubmit()

    //   expect(getWeatherData).toHaveBeenCalled();
    // })

    // it('should fetch weather data for day1', () => {
    //   wrapper.state = {
    //   day1: 'denver',
    //   day2: '',
    //   day3: '',
    //   day4: '',
    //   day5: '',
    //   day6: '',
    //   day7: '',
    //   }

    //   wrapper.instance().getWeatherData();

    //   expect(wrapper.instance.fetchWeather).toHaveBeenCalledWith(wrapper.state.day1)

    // })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setWeather action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.setWeather(mockWeatherData, 'Denver', 1)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setWeather(mockWeatherData, 'Denver', 1)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})