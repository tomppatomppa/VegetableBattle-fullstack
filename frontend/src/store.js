import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import highscoreReducer from './reducers/highscoreReducer'
import statusReducer from './reducers/statusReducer'
export default configureStore({
  reducer: {
    notification: notificationReducer,
    highscores: highscoreReducer,
    status: statusReducer,
  },
})
