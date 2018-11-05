import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelForm from '../../containers/TravelForm';
import WeatherResults from '../../containers/WeatherResults';
import PathError from '../PathError';
import './App.css';

const App () => {
  render() {
    return (
      <div className='app-container'>
        <div className="App">
          <Switch>
            <Route 
              exact path='/' 
              component={ TravelForm } />
            <Route 
              path='/results'
              component={ WeatherResults } />
            <Route 
              component={ PathError } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;