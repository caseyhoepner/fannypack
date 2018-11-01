import Geocode from "react-geocode";
import apiKey from './API-key.js'


export const fetchWeather = async (city) => {
  const latLong = await getLatLong(city)
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${latLong.lat},${latLong.lng}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.statusText)
  } else {
  const weatherData = await response.json();
  return cleanData(weatherData)
  }
}

const getLatLong = async (city) => {
  Geocode.setApiKey('AIzaSyCB9XbEI1TFAF8rz13uVbKiOq2a_B9bAhM');
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






// export const getLatLong = async (city, state) => {
//   const geocoder = require('geocoder');
//   const data = await geocoder.geocode(`${city}, ${state}`, function ( err, data ) {
//     console.log(data)
//   });
// }



 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
 
// Geocode.enableDebug();
 
// Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );
 
// Get latidude & longitude from address.

