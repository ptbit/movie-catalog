import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";
import { MovieType } from "../types/movie";

type TrendingStateType = {
  trending: MovieType[];
};

const initialState: TrendingStateType = {
  trending: [],
};

export const getTrending = createAsyncThunk<MovieType[]>("movie/getTrending", async function () {
  const response = await IMDB.getTrendingMovies();
  return response;
});

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.trending = action.payload;
    });
  },
});

export default trendingSlice.reducer;
