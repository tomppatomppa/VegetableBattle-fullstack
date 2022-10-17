import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import highscoreReducer from './reducers/highscoreReducer'
export default configureStore({
  reducer: {
    notification: notificationReducer,
    highscores: highscoreReducer,
  },
})
