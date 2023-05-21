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

type MovieStateType = {
  movies: MovieType[];
  morePages: boolean;
  loading: boolean;
  error: null | string;
};

const initialState: MovieStateType = {
  movies: [],
  morePages: true,
  loading: false,
  error: null,
};

type GetMoviesRequestType = {
  genres: number[];
  pagesId: number;
  sortBy: string;
};

export const getMoviesForRedux = createAsyncThunk<MovieType[] | boolean, GetMoviesRequestType>(
  "movies/getMovies",
  async function (params) {
    const response = await IMDB.getMovies(params.genres, params.pagesId, params.sortBy);
    if (response !== false) {
      return response;
    } else {
      return [];
    }
  }
);

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMoviesList(state) {
      state.movies = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMoviesForRedux.fulfilled, (state, action) => {
      if (typeof action.payload != "boolean") {
        action.payload?.forEach((movie) => state.movies.push(movie));
        if (action.payload.length === 0) {
          state.morePages = false
        }
      } 
    });
  },
});

export default moviesSlice.reducer;
export const { clearMoviesList } = moviesSlice.actions;