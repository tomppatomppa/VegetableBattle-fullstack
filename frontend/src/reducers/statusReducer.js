import { createSlice } from '@reduxjs/toolkit'

const statusSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    appendStatus(state, action) {
      state.push(action.payload)
    },
    setStatus(status, action) {
      return action.payload
    },
  },
})

export const { appendStatus, setStatus } = statusSlice.actions

export const createStatus = (notification) => {
  return (dispatch) => {
    dispatch(appendStatus(notification))
  }
}
export const setStatusTo = (status) => {
  return (dispatch) => {
    dispatch(setStatus(status))
  }
}

export default statusSlice.reducer
