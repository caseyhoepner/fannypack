import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeather } from '../../actions';

import Header from '../../containers/Header';
import * as API from '../../utils';
import apiKey from '../../utils/API-key';
import './TravelForm.css'

export class TravelForm extends Component {
  constructor() {
    super() 
    this.state = {
      city: '',
      date: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick = async () => {
    const { city, date } = this.state;
    const weatherData = await API.fetchWeather(city, date, apiKey);
  }

  render() {
    const { city, date } = this.state;

    return (
      <div>
        <Header />
        <form className='tf-form'onSubmit={this.handleSubmit}>
          <h2 className='tf-title'>Where are you going?</h2>
            <section className='tf-input-components'>
              <input 
                className='tf-form-component'
                onChange={this.handleChange}
                placeholder='Destination'
                name='city'
                value={city}
              />
              <input 
                className='tf-form-component'
                onChange={this.handleChange}
                placeholder='Date of Travel'
                name='date'
                value={date}
              />
              <button className='tf-form-component'>
                Get Packing List
              </button>
            </section>
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setWeather: () => dispatch(setWeather()) 
})

export default connect(null, mapDispatchToProps)(TravelForm);