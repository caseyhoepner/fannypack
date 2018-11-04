import { statusReducer } from '../reducers/statusReducer';
import * as Actions from '../actions';

describe('statusReducer', () => {

  it('should return the default state', () => {
    const expected = false;
    const result = statusReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return state with weatherData', () => {
    const initialState = false;
    const bool = true;
    const expected = true;
    const result = statusReducer(initialState, Actions.changeToLoaded(bool));

    expect(result).toEqual(expected);
  })
})