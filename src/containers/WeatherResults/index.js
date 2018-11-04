import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';

import WeatherCard from '../../components/WeatherCard';
import './WeatherResults.css';
import loadingGif from '../../assets/loading.gif';

const WeatherResults = ({ weatherData, isLoaded }) => {
  let results;

  if (!isLoaded) {
    results = 
      <section className='wr-loading-container'>
        <img className='wr-loading-gif'src={loadingGif} />
        <div className='typewriter'>
          <h1>Compiling your packing lists...</h1>
        </div>
      </section>
  } else {
    results = weatherData.map(city => {
      return <WeatherCard {...city} key={weatherData.summary}/>;
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