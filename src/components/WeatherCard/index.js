import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { packingData } from '../../utils/packingData';
import './WeatherCard.css';

const WeatherCard = ({ highTemp = 90, lowTemp, summary, icon, city, day}) => {

  const getEssentials = () => {
    let essentials = [];

    if (highTemp >= 80) {
      essentials = [...essentials, ...packingData.hot]
    }

    if (highTemp < 80 && lowTemp > 70) {
      essentials = [...essentials, ...packingData.warm]
    }

    if (highTemp < 70 && lowTemp > 40) {
      essentials = [...essentials, ...packingData.cool]
    }

    if (lowTemp <= 40) {
      essentials = [...essentials, ...packingData.cold]
    }

    essentials = [...essentials, ...packingData[icon]];

    return essentials.map(essential => <li>{essential}</li>);
  }

  return (
    <div className="wc-container">
      <div className='wc-weather-container'>
        <h2>{`Day ${day}: ${city}`}</h2>
          <p>High: {highTemp}</p>
          <p>Low: {lowTemp}</p>
          <p>{summary}</p>
          <img className='wc-icon' src={require(`../../assets/${icon}.svg`)} />
      </div>
      <section>
        <h3>Essentials to Bring:</h3>
          <ul>
            { getEssentials() }
          </ul>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

export default withRouter(connect(mapStateToProps)(WeatherCard));