import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
  loading: boolean;
  error: null | string;
};

const initialState: MovieStateType = {
  movies: [],
  loading: false,
  error: null,
};

type GetMoviesRequestType = {
  genres: number[];
  pagesId: number;
  sortBy: string;
};

export const getMoviesForRedux = createAsyncThunk<MovieType[], GetMoviesRequestType>(
  "movies/getMovies",
  async function (params) {
    const response = await IMDB.getMovies(params.genres, params.pagesId, params.sortBy);

    return response;
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
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
export const { clearMoviesList } = moviesSlice.actions;
