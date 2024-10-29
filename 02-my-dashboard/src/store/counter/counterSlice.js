import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 5,
  isReady: false
}  

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne (state) {
      state.count = state.count + 1
    },
    substractOne (state) {
      if (state.count === 0) return
      state.count = state.count - 1
    },
    resetCount (state, action) {
      if (action.payload < 0) action.payload = 0
      state.count = action.payload
    },
    initCounterState(state, action) {
      if (state.isReady) return;
      state.count = action.payload
      state.isReady = true
    }

  }  
});

export const {addOne, substractOne, resetCount, initCounterState} = counterSlice.actions;

export default counterSlice.reducer;