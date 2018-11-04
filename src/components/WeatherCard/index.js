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

    const filteredEssentials = filterEssentials(essentials)

    return filteredEssentials.map(filteredEssential => {
      return <li key={filteredEssential}>{filteredEssential}</li>
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

  return (
    <div className="wc-container">
      <div className='wc-weather-container'>
        <h2>{`Day ${day}: ${city}`}</h2>
          <p>High: {highTemp.toFixed(0)}</p>
          <p>Low: {lowTemp.toFixed(0)}</p>
          <p>{summary}</p>
          <img className='wc-icon' src={require(`../../assets/${icon}-gradient.svg`)} />
      </div>
      <section>
        <h3>What to Pack:</h3>
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