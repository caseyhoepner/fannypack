export const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_WEATHER':
      return {
        weatherData: action.weatherData,
      }
      
    default:
      return state
  }
}