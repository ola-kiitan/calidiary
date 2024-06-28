import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Entry {
  id: number
  date: Date
  content: string
  tags?: string[]
}

interface DiaryState {
  entries: Entry[]
}

const initialState: DiaryState = {
  entries: [],
}

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload)
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      )
    },
  },
})

export const { addEntry, removeEntry } = diarySlice.actions

export default diarySlice.reducer
