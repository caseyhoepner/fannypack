import * as Actions from '../actions';
import { mockWeatherData } from './testMocks';

describe('actions', () => {
  it('should have a type of SET_WEATHER', () => {
    const weatherData = mockWeatherData;
    const expectedAction = {
      type: 'SET_WEATHER',
      weatherData
    }
    const result = Actions.setWeather(mockWeatherData);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of CHANGE_TO_LOADED', () => {
    const bool = true;
    const expectedAction = {
      type: 'CHANGE_TO_LOADED',
      isLoaded: true
    }
    const result = Actions.changeToLoaded(bool)
  })
})
