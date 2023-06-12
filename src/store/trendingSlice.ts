import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";

type MovieType = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

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
