export const setWeather = (weatherData, city, day) => ({
  type: 'SET_WEATHER', 
  weatherData: { ...weatherData, city, day }
})