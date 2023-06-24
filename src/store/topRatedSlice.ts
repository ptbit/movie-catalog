import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";
import { MovieType } from "../types/movie";

type TopRatedStateType = {
  topRated: MovieType[];
};

const initialState: TopRatedStateType = {
  topRated: [],
};

export const getTopRated = createAsyncThunk<MovieType[]>("movie/getTopRated", async function () {
  const response = await IMDB.getTopRatedMovies();
  return response;
});

const TopRatedSlice = createSlice({
  name: "TopRated",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.topRated = action.payload;
    });
  },
});

export default TopRatedSlice.reducer;
