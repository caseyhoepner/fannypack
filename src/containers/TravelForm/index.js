import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeather } from '../../actions';

import Header from '../../containers/Header';
import { withRouter } from 'react-router-dom';
import * as API from '../../utils';
import './TravelForm.css'

export class TravelForm extends Component {
  constructor() {
    super() 
    this.state = {
      city: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { city } = this.state;
    const weatherData = await API.fetchWeather(city);
    await this.props.setWeather(weatherData);
    this.props.history.push('/results');
  }

  render() {
    const { city } = this.state;

    return (
      <div className='parent-container'>
        <Header />
        <form className='tf-form'onSubmit={this.handleSubmit}>
          <h2 className='tf-title'>Where are you going?</h2>
            <div className='tf-form-components'>
              <section className='tf-tomorrow tf-day-input'>
                <p className='tf-day'>Tomorrow</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>
              <section 
                className='tf-day-2 tf-day-input hide'>
                <p className='tf-day'>Day 2</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section 
                className='tf-day-3 tf-day-input hide'>
                <p className='tf-day'>Day 3</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section className='tf-day-4 tf-day-input hide'>
                <p className='tf-day'>Day 4</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section className='tf-day-5 tf-day-input hide'>
                <p className='tf-day'>Day 5</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section className='tf-day-6 tf-day-input hide'>
                <p className='tf-day'>Day 6</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section className='tf-day-7 tf-day-input hide'>
                <p className='tf-day'>Day 7</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>              
              <section className='tf-day-8 tf-day-input hide'>
                <p className='tf-day'>Day 8</p>
                  <input 
                    className='tf-form-component tf-input-component'
                    onChange={this.handleChange}
                    placeholder='Destination'
                    name='city'
                    value={city}
                  />
              </section>
              <button 
                className='tf-add-btn'>+ Add a Day
              </button>
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

const mapDispatchToProps = (dispatch) => ({
  setWeather: (weatherData) => dispatch(setWeather(weatherData)) 
})

export default withRouter(connect(null, mapDispatchToProps)(TravelForm));