import { createSlice } from '@reduxjs/toolkit';
import fighterService from '../services/fighters';

const highscoreSlice = createSlice({
  name: 'highscores',
  initialState: [],
  reducers: {
    setHighscore(state, action) {
      const highscore = action.payload;
      return state.map((h) => (h.name === highscore.name ? highscore : h));
    },
    setHighscores(state, action) {
      return action.payload;
    },
    appendHighscore(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setHighscores, appendHighscore, setHighscore } =
  highscoreSlice.actions;

export const updateHighscore = (highscore) => {
  return async (dispatch) => {
    const updatedAnecdote = await fighterService.updateStats(highscore);
    dispatch(setHighscore(updatedAnecdote));
  };
};

export const createHighscore = (newHighscore) => {
  return async (dispatch) => {
    const createdVegetable = await fighterService.create(newHighscore);
    dispatch(appendHighscore(createdVegetable));
  };
};
export const initializeHighscores = () => {
  return async (dispatch) => {
    const highscores = await fighterService.getAll();

    dispatch(setHighscores(highscores));
  };
};

export default highscoreSlice.reducer;
