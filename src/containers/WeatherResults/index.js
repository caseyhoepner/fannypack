import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';

import WeatherCard from '../../components/WeatherCard';
import './WeatherResults.css';
import suitcase from '../../assets/suitcase.svg';
const uuidv1 = require('uuid/v1');

const WeatherResults = ({ weatherData, isLoaded }) => {
  let results;

  if (!isLoaded) {
    results = 
      <section className='wr-loading-container'>
        <img className='wr-suitcase'src={suitcase} />
        <div className='typewriter'>
          <h1>Compiling your packing lists...</h1>
        </div>
      </section>
  } else {
    results = weatherData.map(city => {
      return <WeatherCard {...city} key={uuidv1()}/>;
    })
  };

    return (
      <div>
        <Header />
          <div className='wr-container'>
            { results }
          </div>
      </div>
    )
};

const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  isLoaded: state.isLoaded
});

export default withRouter(connect(mapStateToProps)(WeatherResults));