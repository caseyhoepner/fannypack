import Geocode from "react-geocode";
import { weatherApiKey, googleApiKey } from './API-key.js'
import Moment from 'react-moment';
import 'moment-timezone';
var moment = require('moment');

export const fetchWeather = async (city) => {
  const latLong = await getLatLong(city)
  const time = moment().format(); 
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${latLong.lat},${latLong.lng},${time}`;

// [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS][timezone]

  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statusText)
  } else {
  const weatherData = await response.json();
  console.log(weatherData)
  return cleanData(weatherData)
  }
}

const getLatLong = async (city) => {
  Geocode.setApiKey(googleApiKey);
  Geocode.enableDebug();
  const response = await Geocode.fromAddress(city)
  const latLong = await response.results[0].geometry.location;

  return(latLong)
}

const cleanData = (weatherData) => {
  const { summary, temperatureHigh, temperatureLow, icon } = weatherData.daily.data[0]
  return { 
    highTemp: temperatureHigh,
    lowTemp: temperatureLow,
    summary,
    icon
  }
}