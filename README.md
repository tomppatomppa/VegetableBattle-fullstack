# VegetableBattle-fullstack

# Description

User can choose two different vegetables to fight each other, and see which one is stronger. After each succesfull fight, the score is added to backend and show on the highscore tab.

# Stats
Stats are calculated based on nutritional value:
  Health: energyKcal
  Attack: carbohydrate
  Defence: protein
  Delay: fat+carbohydrate+protein -> this stat will determine the frequency of each hit
 
# Limitations: 
  Vegetables cannot fight each other e.g a carrot cannot fight carrot. However a Paprika, yellow, can fight Paprika, green.  


# react version 18.2.0

# Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

https://tailwindcss.com/ as CSS framework

Redux https://redux.js.org/

# Assets used:

Icons: https://react-icons.github.io/react-icons/
SoundFX: https://pixabay.com/sound-effects/search/punch/
Background: https://wallpapercave.com/landscape-pixel-art-wallpapers
Background-Music: Recorded by me.

## Available Scripts for frontend

In the project directory, you can run:

### `npm install`

Install the project dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Backend

Created with Node/Express and MongoDB as database
The app is using https://fineli.fi/fineli/fi/avoin-data for fetching vegetables(in Finnish) data

## Available Scripts for backend

### `npm install`

Install the project dependencies.

### `npm run start`

