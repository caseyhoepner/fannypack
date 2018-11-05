import * as API from '../utils';
import { mockWeatherdata } from './testMocks';

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

    it('should call fetch with the correct url', async () => {
      const expected = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/39.7392358,-104.990251,2018-11-04T18:57:44-07:00`

      await API.fetchWeather('Denver');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  })
});