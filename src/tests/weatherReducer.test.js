import { weatherReducer } from '../reducers/weatherReducer';
import * as Actions from '../actions';
import { mockWeatherData } from './testMocks';

describe('weatherReducer', () => {
  let weather;

  beforeEach(() => {
    weather = mockWeatherData
  })

  it('should return the default state', () => {
    const expected = [];
    const result = weatherReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return state with weatherData', () => {
    const initialState = [];
    const expected = weather;
    const result = weatherReducer(initialState, Actions.setWeather(weather));

    expect(result).toEqual(expected);
  })
})