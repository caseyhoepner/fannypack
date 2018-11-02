import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../../containers/Header'

import './WeatherResults.css'

const WeatherResults = (props) => {
  const { highTemp, lowTemp, icon, summary } = props.weatherData;
  return (
    <div>
      <Header />
        <div className='wr-container'>
          <div className='wr-weather-container'>
            <h2>Weather</h2>
              <p>High: {highTemp}</p>
              <p>Low: {lowTemp}</p>
              <p>{summary}</p>
              <img className='wr-icon' src={require(`../../assets/rain.svg`)} />
          </div>
          <div className='wr-pack-container'>
            <h2>What to Pack</h2>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

export default connect(mapStateToProps)(WeatherResults);