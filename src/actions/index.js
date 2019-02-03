export const setWeather = (weatherData, city, day) => ({
  type: 'SET_WEATHER', 
  weatherData: { ...weatherData, city, day }
})

export const changeToLoaded = (bool) => ({
  type: 'CHANGE_TO_LOADED',
  isLoaded: true
})

export const clearState = () => ({
  type: 'CLEAR_STATE',
})