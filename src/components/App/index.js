import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelForm from '../../containers/TravelForm';
import WeatherResults from '../../containers/WeatherResults';
import PathError from '../PathError';
import FetchError from '../FetchError';
import './App.css';

const App = () => {
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
            path='/FetchError'
            component={ FetchError } />
          <Route 
            component={ PathError } />
        </Switch>
      </div>
    </div>
  )
};

export default App;