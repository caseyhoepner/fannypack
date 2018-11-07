# JetPack

Going on a trip, but unsure what you need to pack? JetPack is a singl-page React Rexud web application and your one-stop-shop for getting a weather summary and a list of essentials you'll need to bring to make sure you're prepared for anything mother nature has in store. Simply give JetPack your destination cities and it will do the rest. Pack your bag and then rest easy the night before your trip knowing you have everything you'll need to be warm and dry on your journey.

### See it live
https://jetpack-turing.herokuapp.com/

### How to view locally:

1. clone down this repo
2. 'npm start' in your terminal
3. go to 'localhost:3000' in your browser

### Landing Page:

<img width="826" alt="screen shot 2018-11-07 at 06 17 32" src="https://user-images.githubusercontent.com/36767936/48133984-cc26ea00-e255-11e8-968f-508b8e385b4c.png">

<img width="695" alt="screen shot 2018-11-07 at 06 19 40" src="https://user-images.githubusercontent.com/36767936/48133986-cdf0ad80-e255-11e8-962a-f46713401199.png">

<img width="984" alt="screen shot 2018-11-07 at 06 23 27" src="https://user-images.githubusercontent.com/36767936/48133991-d0530780-e255-11e8-81e9-9e17a1010843.png">

## Wireframes

<img width="464" alt="screen shot 2018-11-07 at 07 19 41" src="https://user-images.githubusercontent.com/36767936/48136721-9c7be000-e25d-11e8-96ae-7a87455909ff.png">

<img width="612" alt="screen shot 2018-11-07 at 07 17 04" src="https://user-images.githubusercontent.com/36767936/48136559-2d9e8700-e25d-11e8-910f-1fbd0757d6ec.png">

<img width="870" alt="screen shot 2018-11-07 at 07 11 21" src="https://user-images.githubusercontent.com/36767936/48136272-74d84800-e25c-11e8-9971-4c54efa82623.png">

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
