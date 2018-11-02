export const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_WEATHER':
      return [ ...state, action.weatherData ]
      
    default:
      return state
  }
}