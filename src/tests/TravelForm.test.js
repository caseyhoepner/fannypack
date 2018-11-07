import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockWeatherData } from './testMocks';
import { TravelForm, mapDispatchToProps } from '../containers/TravelForm'
import * as Actions from '../actions'
import * as API from '../utils'

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
      wrapper.instance().forceUpdate();

      wrapper.find('form').simulate('submit');

      expect(spy).toHaveBeenCalled();
    })

    it('calls getWeatherData in handleSubmit', () => {
      wrapper = shallow(<TravelForm setWeather={setWeather} history={[]} changeToLoaded={changeToLoaded}/>);

      const mockEvent = { preventDefault: jest.fn() }
      const spy = spyOn(wrapper.instance(), 'getWeatherData')

      wrapper.instance().handleSubmit(mockEvent)

      expect(spy).toHaveBeenCalled();
    })

    it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: 'Denver',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        day6: '',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 1)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: 'Denver',
        day3: '',
        day4: '',
        day5: '',
        day6: '',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 2)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: '',
        day3: 'Denver',
        day4: '',
        day5: '',
        day6: '',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 3)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: '',
        day3: '',
        day4: 'Denver',
        day5: '',
        day6: '',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 4)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: 'Denver',
        day6: '',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 5)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        day6: 'Denver',
        day7: ''
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 6)
    })

      it('should call fetchWeather in getWeatherData', async () => {
      wrapper.instance().setState({
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        day6: '',
        day7: 'Denver'
      })

      API.fetchWeather = jest.fn();
      await wrapper.instance().getWeatherData();
      expect(API.fetchWeather).toHaveBeenCalledWith('Denver', 7)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setWeather action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.setWeather(mockWeatherData, 'Denver', 1)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setWeather(mockWeatherData, 'Denver', 1)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the changeToLoaded action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.changeToLoaded(true)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.changeToLoaded(true)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})