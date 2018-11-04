import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer'
import { statusReducer } from './statusReducer'

export const rootReducer = combineReducers({
  weatherData: weatherReducer,
  isLoaded: statusReducer
})