import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Entry {
  id: number;
  content: string;
  date: Date;
  tags: string[];
}
type DiaryState = { entries: Entry[] };
const DIARY_ENTRIES_KEY = 'diaryEntries';
// Attempt to load the initial state from localStorage
const loadInitialState = (): DiaryState => {
  const entriesFromStorage = localStorage.getItem('diaryEntries');
  try {
    return entriesFromStorage
      ? { entries: JSON.parse(entriesFromStorage) }
      : { entries: [] };
  } catch (error) {
    return { entries: [] };
  } // Default initial state if nothing in localStorage
};

const initialState = loadInitialState();
const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload);
      localStorage.setItem(DIARY_ENTRIES_KEY, JSON.stringify(state.entries));
    },

    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
      localStorage.setItem(DIARY_ENTRIES_KEY, JSON.stringify(state.entries));
    },
  },
});

export const { addEntry, removeEntry } = diarySlice.actions;

export default diarySlice.reducer;
