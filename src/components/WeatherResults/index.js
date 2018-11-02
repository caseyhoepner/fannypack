import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../../containers/Header'

import './WeatherResults.css'

const WeatherResults = (props) => {
  const { highTemp, lowTemp, icon, summary } = props.weatherData;
  return (
    <div>
      <Header />
      <div>WeatherResults</div>
        <p>High: {highTemp}</p>
        <p>Low: {lowTemp}</p>
        <p>{summary}</p>
        <img src={require(`../../assets/${icon}-gradient.svg`)} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

export default connect(mapStateToProps)(WeatherResults);