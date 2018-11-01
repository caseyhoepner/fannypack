import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelForm from '../../containers/TravelForm';
import PathError from '../PathError';
import { fetchWeather } from '../../utils';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetchWeather('denver')
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path='/' 
            component={ TravelForm } />
          <Route 
            component={ PathError }/>
        </Switch>
      </div>
    );
  }
}

export default App;