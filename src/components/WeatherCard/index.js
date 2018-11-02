import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './WeatherCard.css';

const WeatherCard = ({ highTemp, lowTemp, summary, icon, city, day}) => {
  return (
    <div className="wc-container">
      <div className='wc-weather-container'>
        <h2>{`Day ${day}: ${city}`}</h2>
          <p>High: {highTemp}</p>
          <p>Low: {lowTemp}</p>
          <p>{summary}</p>
          <img className='wc-icon' src={require(`../../assets/${icon}.svg`)} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

export default withRouter(connect(mapStateToProps)(WeatherCard));