import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slider/counterSlider'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})