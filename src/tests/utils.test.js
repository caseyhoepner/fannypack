import * as API from '../utils';
import { mockWeatherdata, mockWeatherDataClean } from './testMocks';
import { weatherApiKey } from '../utils/API-key.js'

describe('API', () => {
  describe('fetchWeather', () => {
    let apiKey;

    beforeEach(() => {
      apiKey = 1

      window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeatherdata)
      }))
    });

    // it('should call fetch with the correct url', async () => {

    //   const getLatLong = jest.fn(() => Promise.resolve({lat: 1, lng: 2}));

    //   const getTimezone = jest.fn(() => Promise.resolve('America/Denver'));

    //   const expected = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/1,2,2018-11-06T18:48:56-07:00`

    //   await API.fetchWeather('Denver', 1);

    //   expect(window.fetch).toHaveBeenCalledWith(expected);
    // });

    it('should execute fetch with the correct url in getTimezone', () => {
      const expected = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/1,2`

      API.getTimezone({lat:1, lng: 2})

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    // it('should get the time', () => {
    //   const result = API.getTime('America/Denver', 1)
    //   const expected = '2018-11-07T12:44:10-07:00'
      
    //   expect(result).toEqual(expected);
    // })

    it('should clean weather data', () => {
      const result = API.cleanData(mockWeatherDataClean);
      const expected = {
          highTemp: 70,
          lowTemp: 50,
          summary: 'Mostly cloudy.',
          icon: 'rain-clouds.svg'}

      expect(result).toEqual(expected);
    })
  })
});