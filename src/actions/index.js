export const setWeather = (weatherData, city, day) => ({
  type: 'SET_WEATHER', 
  weatherData: { ...weatherData, city, day }
})

export const toggleLoaded = (bool) => ({
  type: 'TOGGLE_LOADED',
  isLoaded: bool
})

export const toggleErrored = (bool) => ({
  type: 'TOGGLE_ERRORED',
  hasErrored: bool
})

export const clearState = () => ({
  type: 'CLEAR_STATE',
})