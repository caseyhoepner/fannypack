export const mockWeatherData = { 
    city: 'Denver',
    day: 1,
    highTemp: 70,
    lowTemp: 50,
    summary: 'Mostly cloudy.',
    icon: 'rain-clouds.svg'
  }

export const mockWeatherDataClean = { 
    hourly: {
      summary: 'Mostly cloudy.',
      data: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          icon: 'rain-clouds.svg'
        }
      ]
    },
    daily: {
      data: [
        {
          temperatureHigh: 70,
          temperatureLow: 50,
        }
      ]
    }
  }