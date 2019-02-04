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
      day10: '',
      showingDay1: true,
      showingDay3: false,
      showingDay4: false,
      showingDay5: false,
      showingDay6: false,
      showingDay7: false,
      showingDay8: false,
      showingDay9: false,
      showingDay10: false,
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

  addDay = (event) => {
    event.preventDefault();
    const name = event.target.name

    this.setState({
      [name]: true
    })
  }

  getWeatherData = async () => {
    const { day1, day2, day3, day4, day5, day6, day7, day8, day9, day10 } = this.state;
    const { setWeather, toggleLoaded, hasErrored } = this.props;
    const days = [ day1, day2, day3, day4, day5, day6, day7, day8, day9, day10 ];

    for(let i = 0; i < days.length; i++) {
      if (days[i] !== '') {
        const weatherData = await API.fetchWeather(days[i], (i + 1));

        if (weatherData === 'hasErrored') {
          this.handleError();

        } else {
          setWeather(weatherData, days[i], (i + 1)); 
        }
      }
    }

    if (!hasErrored) {
      toggleLoaded(true);
    }
  }

  render() {
    const { day1, 
      day2, 
      day3, 
      day4, 
      day5, 
      day6, 
      day7, 
      day8, 
      day9, 
      day10,
      showingDay6, 
      showingDay7, 
      showingDay8, 
      showingDay9, 
      showingDay10 
    } = this.state;

    return (
      <div className='parent-container'>
        <Header />
        <form 
          className='tf-form'
          onSubmit={this.handleSubmit}>
          <h2 className='tf-title'>Where are you going?</h2>
            <div className='tf-form-components'>
              <section className='tf-tomorrow tf-day-input'>
                <p className='tf-day'>Tomorrow</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='test-input tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day1'
                      value={day1}
                    />
                  </div>
              </section>
              <section 
                className='tf-day-2 tf-day-input'>
                <p className='tf-day'>Day 2</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day2'
                      value={day2}
                    />
                  </div>
              </section>              
              <section 
                className='tf-day-3 tf-day-input'>
                <p className='tf-day'>Day 3</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day3'
                      value={day3}
                    />
                  </div>
              </section>              
              <section 
                className='tf-day-4 tf-day-input'>
                <p className='tf-day'>Day 4</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day4'
                      value={day4}
                    />
                  </div>
              </section>              
              <section 
                className='tf-day-5 tf-day-input'>
                <p className='tf-day'>Day 5</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day5'
                      value={day5}
                    />
                    <div className={showingDay6 ? 'hide' : 'tf-add-btn-container'}>
                      <p className='tf-add-btn-text'>Add a day</p>
                      <button
                        type='button'
                        className='tf-add-btn'
                        name='showingDay6'
                        onClick={(event) => this.addDay(event)}>+</button>
                    </div>
                  </div>
              </section>              
              <section 
                className={ showingDay6 ? 'tf-day-6 tf-day-input' : 'hide' }>
                <p className='tf-day'>Day 6</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day6'
                      value={day6}
                    />
                    <div className={showingDay7 ? 'hide' : 'tf-add-btn-container'}>
                      <p className='tf-add-btn-text'>Add a day</p>
                      <button
                        type='button'
                        className='tf-add-btn'
                        name='showingDay7'
                        onClick={(event) => this.addDay(event)}>+</button>
                    </div>
                  </div>
              </section>              
              <section 
                className={ showingDay7 ? 'tf-day-7 tf-day-input' : 'hide' }>
                <p className='tf-day'>Day 7</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day7'
                      value={day7}
                    />
                    <div className={showingDay8 ? 'hide' : 'tf-add-btn-container'}>
                      <p className='tf-add-btn-text'>Add a day</p>
                      <button
                        type='button'
                        className='tf-add-btn'
                        name='showingDay8'
                        onClick={(event) => this.addDay(event)}>+</button>
                    </div>
                  </div>
              </section>                
              <section 
                className={ showingDay8 ? 'tf-day-8 tf-day-input' : 'hide' }>
                <p className='tf-day'>Day 8</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day8'
                      value={day8}
                    />
                    <div className={showingDay9 ? 'hide' : 'tf-add-btn-container'}>
                      <p className='tf-add-btn-text'>Add a day</p>
                      <button
                        type='button'
                        className='tf-add-btn'
                        name='showingDay9'
                        onClick={(event) => this.addDay(event)}>+</button>
                    </div>
                  </div>
              </section>                 
              <section 
                className={ showingDay9 ? 'tf-day-9 tf-day-input' : 'hide' }>
                <p className='tf-day'>Day 9</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day9'
                      value={day9}
                    />
                    <div className={showingDay10 ? 'hide' : 'tf-add-btn-container'}>
                      <p className='tf-add-btn-text'>Add a day</p>
                      <button
                        type='button'
                        className='tf-add-btn'
                        name='showingDay10'
                        onClick={(event) => this.addDay(event)}>+</button>
                    </div>
                  </div>
              </section>                  
              <section 
                className={ showingDay10 ? 'tf-day-10 tf-day-input' : 'hide' }>
                <p className='tf-day'>Day 10</p>
                  <div className='tf-input-and-btn'>
                    <input 
                      className='tf-form-component tf-input-component'
                      onChange={this.handleChange}
                      placeholder='Destination'
                      name='day10'
                      value={day10}
                    />
                  </div>
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