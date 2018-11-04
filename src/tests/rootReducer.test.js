import React from 'react';
import { rootReducer } from '../reducers';

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  })
})