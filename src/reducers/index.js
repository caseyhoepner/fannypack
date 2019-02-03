import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer'
import { statusReducer } from './statusReducer'
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
  weatherData: weatherReducer,
  isLoaded: statusReducer,
  hasErrored: errorReducer
})