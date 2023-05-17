import { createSlice } from "@reduxjs/toolkit";

const selectedGenreSlice = createSlice({
  name: "selectedGenres",
  initialState: {
    selectedGenres: <number[]>[],
  },
  reducers: {
    addSelectedGenre(state, action) {
      state.selectedGenres.push(action.payload);
    },
    removeSelectedGenre(state) {
      state.selectedGenres = [];
    },
  },
});

export const { addSelectedGenre, removeSelectedGenre } = selectedGenreSlice.actions;
export default selectedGenreSlice.reducer;
