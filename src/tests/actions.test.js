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
})
