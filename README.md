# JetPack

Going on a trip, but unsure what you need to pack? JetPack is a single-page web application and your one-stop-shop for getting a weather summary and a list of essentials you'll need to bring to make sure you're prepared for anything mother nature has in store. Simply give JetPack your destination cities and it will do the rest. Pack your bag and then rest easy the night before your trip knowing you have everything you'll need to be warm and dry on your journey.

### Technologies Used:
React,
Redux,
React Router,
Enzyme,
Jest

### How to view locally:

1. clone down this repo
2. npm install
3. npm start

### Landing Page:
<img width="845" alt="screen shot 2018-12-16 at 20 49 10" src="https://user-images.githubusercontent.com/36767936/50065564-668f1d00-0174-11e9-828f-b7128436e21d.png">

### Loading Page:
<img width="967" alt="screen shot 2018-12-16 at 20 44 51" src="https://user-images.githubusercontent.com/36767936/50065560-60993c00-0174-11e9-9105-3a51ff1f20b7.png">

### Results Page:
<img width="1440" alt="screen shot 2018-12-16 at 20 49 57" src="https://user-images.githubusercontent.com/36767936/50065553-570fd400-0174-11e9-9b39-e51cff40b11c.png">

## App Architecture

```
Provider
|
|_ BrowserRouter
  |
  |_ App (stateless)
    |
    |_ Header (stateless)
    |
    |_ TravelForm (stateful)
        |
        |_ WeatherResults (stateless)
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
