import Geocode from "react-geocode";
import { weatherApiKey, googleApiKey } from './API-key.js'
import 'moment-timezone';
var moment = require('moment');

export const fetchWeather = async (city, diff) => {
  try {
    const latLong = await getLatLong(city)
    const timezone = await getTimezone(latLong);
    const now = moment()
    const then = now.tz(timezone).add(diff, 'days').format();
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${latLong.lat},${latLong.lng},${then}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.log(response.statusText)

    } else {
    const weatherData = await response.json();
    console.log(weatherData)
    return cleanData(weatherData)
    }
  } catch(error) {
    console.log(error)
  }
}

export const getLatLong = async (city) => {
  Geocode.setApiKey(googleApiKey);
  const response = await Geocode.fromAddress(city)
  const latLong = await response.results[0].geometry.location;

  return(latLong);
}

export const getTimezone = async (latLong) => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${latLong.lat},${latLong.lng}`;
  const response = await fetch(url)
  const urlData = await response.json();

  return urlData.timezone;
} 

export const cleanData = (weatherData) => {
  const { temperatureHigh, temperatureLow } = weatherData.daily.data[0]
  const { icon } = weatherData.hourly.data[12];
  const { summary } = weatherData.hourly;

  return { 
    highTemp: temperatureHigh,
    lowTemp: temperatureLow,
    summary,
    icon
  }
}