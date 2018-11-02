import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';

import WeatherCard from '../../components/WeatherCard';
import './WeatherResults.css';

const WeatherResults = (props) => {
  if (props.weatherData) {
    const { highTemp, lowTemp, icon, summary } = props.weatherData;
    const cards = props.weatherData.map(city => {
      return <WeatherCard {...city}/>;
    })

    return (
      <div>
        <Header />
          <div className='wr-container'>
            { cards }
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData
})

export default withRouter(connect(mapStateToProps)(WeatherResults));