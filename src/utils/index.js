export const fetchWeather = async (apiKey) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText)

  } else {
  return await response.json();
  }
}