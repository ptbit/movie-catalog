import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const selectedGenreSlice = createSlice({
  name: "selectedGenres",
  initialState: {
    selectedGenres: <number[]>[],
  },
  reducers: {
    addSelectedGenre(state, action: PayloadAction<number>) {
      state.selectedGenres.push(action.payload);
    },
    removeSelectedGenre(state, action: PayloadAction<number>) {
      state.selectedGenres = state.selectedGenres.filter((genre) => genre !== action.payload);
    },
  },
});

export const { addSelectedGenre, removeSelectedGenre } =
  selectedGenreSlice.actions;
export default selectedGenreSlice.reducer;
