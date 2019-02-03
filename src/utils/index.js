import Geocode from "react-geocode";
// import { weatherApiKey, googleApiKey } from './API-key.js'
import 'moment-timezone';
var moment = require('moment'); 

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchWeather = async (city, diff) => {
  try {
    const latLong = await getLatLong(city)
    const timezone = await getTimezone(latLong);
    const time = getTime(timezone, diff);
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${latLong.lat},${latLong.lng},${time}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.log(response.statusText)

    } else {
    const weatherData = await response.json();
    
    return cleanData(weatherData)
    }
  } catch(error) {
      console.log(error.message)
  }
}

export const getLatLong = async (city) => {
  try {
    Geocode.setApiKey(googleApiKey);
    const response = await Geocode.fromAddress(city)
    const latLong = await response.results[0].geometry.location;

    return (latLong);
  } catch(error) {
      throw new Error(error.message)
    }
}

export const getTimezone = async (latLong) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${latLong.lat},${latLong.lng}`;
    const response = await fetch(url)
    const urlData = await response.json();

    return urlData.timezone;
  } catch(error) {
      throw new Error(error.message)
  }
} 

export const getTime = (timezone, diff) => {
  const now = moment()
  const time = now.tz(timezone).add(diff, 'days').format();
  return time;
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