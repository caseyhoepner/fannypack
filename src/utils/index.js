import Geocode from "react-geocode";


export const fetchWeather = async (apiKey) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText)

  } else {
  return await response.json();
  }
}



export const getLatLong = () => {
  Geocode.setApiKey('AIzaSyCB9XbEI1TFAF8rz13uVbKiOq2a_B9bAhM');
  Geocode.enableDebug();
  Geocode.fromAddress("london").then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );
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

