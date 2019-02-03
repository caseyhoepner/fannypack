import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setWeather, toggleLoaded, toggleErrored } from '../../actions';
import Header from '../../containers/Header';
import * as API from '../../utils/';
import './TravelForm.css';

export class TravelForm extends Component {
  constructor() {
    super() 
    this.state = {
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      day6: '',
      day7: '',
      day8: '',
      day9: '',
      day10: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/results');
    this.getWeatherData();
  }

  handleError = () => {
    toggleErrored(true);
    this.props.history.push('/FetchError');
  }

  getWeatherData = async () => {
    const { day1, day2, day3, day4, day5, day6, day7, day8, day9, day10 } = this.state;
    const { setWeather, toggleLoaded, hasErrored } = this.props;

    // for(let i = 1; i < 9; i++) {
    //   console.log(`day${i}`)
    //   if (`day${i}`) {
    //     const weatherData = await API.fetchWeather(`day${i}, ${i}`);
    //     if (weatherData === 'hasErrored') {
    //     this.handleError();
    //     } else {
    //       setWeather(weatherData, `day${i}, ${i}`); 
    //     }
    //   }
    // }

    if (day1) {
      const weatherData = await API.fetchWeather(day1, 1);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day1, 1); 
      }
    }

    if (day2) {
      const weatherData = await API.fetchWeather(day2, 2);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day2, 2); 
      }
    }

    if (day3) {
      const weatherData = await API.fetchWeather(day3, 3);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day3, 3); 
      }
    }

    if (day4) {
      const weatherData = await API.fetchWeather(day4, 4);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day4, 4); 
      }
    }

    if (day5) {
      const weatherData = await API.fetchWeather(day5, 5);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day5, 5); 
      }
    }

    if (day6) {
      const weatherData = await API.fetchWeather(day6, 6);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day6, 6); 
      }
    }

    if (day7) {
      const weatherData = await API.fetchWeather(day7, 7);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day7, 7); 
      }
    }

    if (day8) {
      const weatherData = await API.fetchWeather(day8, 8);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day8, 8); 
      }
    }

    if (day9) {
      const weatherData = await API.fetchWeather(day9, 9);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day9, 9); 
      }
    }

    if (day10) {
      const weatherData = await API.fetchWeather(day10, 10);
      if (weatherData === 'hasErrored') {
        this.handleError();
      } else {
        setWeather(weatherData, day10, 10); 
      }
    }

    if (!hasErrored) {
      toggleLoaded(true);
    }
  }

  render() {
    const { day1, day2, day3, day4, day5, day6, day7, day8, day9, day10 } = this.state;

    return (
      <div className='parent-container'>
        <Header />
        <form className='tf-form'onSubmit={this.handleSubmit}>
          <h2 className='tf-title'>Where are you going?</h2>
            <div className='tf-form-components'>
              <section className='tf-tomorrow tf-day-input'>
                <p className='tf-day'>Tomorrow</p>
                  <input 
                    className='test-input tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day1'
                    value={day1}
                  />
              </section>
              <section 
                className='tf-day-2 tf-day-input'>
                <p className='tf-day'>Day 2</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day2'
                    value={day2}
                  />
              </section>              
              <section 
                className='tf-day-3 tf-day-input'>
                <p className='tf-day'>Day 3</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day3'
                    value={day3}
                  />
              </section>              
              <section className='tf-day-4 tf-day-input'>
                <p className='tf-day'>Day 4</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day4'
                    value={day4}
                  />
              </section>              
              <section className='tf-day-5 tf-day-input'>
                <p className='tf-day'>Day 5</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day5'
                    value={day5}
                  />
              </section>              
              <section className='tf-day-6 tf-day-input'>
                <p className='tf-day'>Day 6</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day6'
                    value={day6}
                  />
              </section>              
              <section className='tf-day-7 tf-day-input'>
                <p className='tf-day'>Day 7</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day7'
                    value={day7}
                  />
              </section>                
              <section className='tf-day-8 tf-day-input'>
                <p className='tf-day'>Day 8</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day8'
                    value={day8}
                  />
              </section>                 
              <section className='tf-day-9 tf-day-input'>
                <p className='tf-day'>Day 9</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day9'
                    value={day9}
                  />
              </section>                  
              <section className='tf-day-10 tf-day-input'>
                <p className='tf-day'>Day 10</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='day10'
                    value={day10}
                  />
              </section>             
              <button 
                className='tf-form-component tf-btn'>
                Get Packing List
              </button>
            </div>
          </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setWeather: (weatherData, city, day) => dispatch(setWeather(weatherData, city, day)), 
  toggleLoaded: (bool) => dispatch(toggleLoaded(bool)),
  toggleErrored: (bool) => dispatch(toggleErrored(bool))
});

TravelForm.propTypes = {
  setWeather: PropTypes.func.isRequired,
  toggleLoaded: PropTypes.func.isRequired,
  toggleErrored: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(TravelForm));