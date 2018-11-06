import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { packingData } from '../../utils/packingData';
import './WeatherCard.css';

export const WeatherCard = ({ highTemp, lowTemp, summary, icon, city, day}) => {

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

    const filteredEssentials = filterEssentials(essentials)

    return filteredEssentials.map(filteredEssential => {
      return <li className='wc-essentials-list'key={filteredEssential}>{filteredEssential}</li>
      })
  }

  const filterEssentials = (essentials) => {
    return essentials.reduce((filteredEssentials, essential) => {
      if (!filteredEssentials.includes(essential)) {
        filteredEssentials.push(essential);
      }
      return filteredEssentials;
    }, []);
  }

  const formatCity = function (city) {
    city = city.toLowerCase().split(' ');
    for (var i = 0; i < city.length; i++) {
      city[i] = city[i].charAt(0).toUpperCase() + city[i].slice(1);
    }
    return city.join(' ');
  };

  return (
    <div className="wc-container">
      <div className='wc-weather-container'>
        <h2 className='wc-day'>{`Day ${day}: ${formatCity(city)}`}</h2>
          <section className='wc-temp-icon-container'>
            <img className='wc-icon' src={require(`../../assets/${icon}.svg`)} />
            <section className='wc-temp-container'>
              <p className='wc-high'>High: {highTemp.toFixed(0)}&#176;</p>
              <p className='wc-low'>Low: {lowTemp.toFixed(0)}&#176;</p>
            </section>
          </section>  
          <p className='wc-summary'>{summary}</p>
      </div>
      <section className='wc-essentials'>
        <h3 className='wc-essentials-title'>What to Pack:</h3>
          <ul className='wc-essentials-list'>
            { getEssentials() }
          </ul>
      </section>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

WeatherCard.propTypes = {
  weatherData: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(WeatherCard));