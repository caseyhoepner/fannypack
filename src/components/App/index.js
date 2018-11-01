import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelForm from '../../containers/TravelForm';
import PathError from '../PathError';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ TravelForm } />
        <Route component={ PathError }/>
      </Switch>
    </div>
  );
}

export default App;