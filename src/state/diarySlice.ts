import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Entry {
  id: number;
  content: string;
  date: Date;
  tags: string[];
}

// Attempt to load the initial state from localStorage
const loadInitialState = (): { entries: Entry[] } => {
  const entriesFromStorage = localStorage.getItem('diaryEntries');
  if (entriesFromStorage) {
    return { entries: JSON.parse(entriesFromStorage) };
  }
  return { entries: [] }; // Default initial state if nothing in localStorage
};

const initialState = loadInitialState();

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload);
      localStorage.setItem('diaryEntries', JSON.stringify(state.entries));
    },

    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      localStorage.setItem('diaryEntries', JSON.stringify(state.entries));
    },
  },
});

export const { addEntry, removeEntry } = diarySlice.actions;

export default diarySlice.reducer;