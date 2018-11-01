import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeather } from '../../actions';

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
    this.setState({[event.name]: event.target.value})
  }

  handleClick = async () => {
    const { city, date } = this.state;
    const weatherData = await API.fetchWeather(city, date, apiKey);
  }

  render() {
    const { city, date } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          placeholder='City'
          name='city'
          value={city}
        />
        <input 
          onChange={this.handleChange}
          placeholder='Date of travel'
          name='date'
          value={date}
        />
        <button>
          Get Packing List
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setWeather: () => dispatch(setWeather()) 
})

export default connect(null, mapDispatchToProps)(TravelForm);