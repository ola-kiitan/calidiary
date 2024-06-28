import { configureStore } from '@reduxjs/toolkit'
import diaryReducer from './diarySlice' // Import diarySlice reducer

const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
})

export default store
