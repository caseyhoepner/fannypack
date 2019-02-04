export const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_WEATHER':
      return [ ...state, action.weatherData ]

    case 'CLEAR_STATE':
      return []
      
    default:
      return state
  }
}