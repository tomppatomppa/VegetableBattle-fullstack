import { createSlice } from '@reduxjs/toolkit'
import vegetableService from '../services/fighters'

const highscoreSlice = createSlice({
  name: 'highscores',
  initialState: [],
  reducers: {
    setHighscores(state, action) {
      return action.payload
    },
    appendHighscore(state, action) {
      state.push(action.payload)
    },
  },
})
export const { setHighscores, appendHighscore } = highscoreSlice.actions

export const createHighscore = (newHighscore) => {
  return async (dispatch) => {
    const createdVegetable = await vegetableService.create(newHighscore)
    dispatch(appendHighscore(createdVegetable))
  }
}
export const initializeHighscores = () => {
  return async (dispatch) => {
    const highscores = await vegetableService.getAll()
    dispatch(setHighscores(highscores))
  }
}

export default highscoreSlice.reducer
