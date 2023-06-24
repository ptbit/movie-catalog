import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";
import { MovieType } from "../types/movie";

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

type searchParamsType = {
  query: string;
  page: number;
};

export const getSearchMovies = createAsyncThunk<MovieType[], searchParamsType>(
  "movies/getSearchMovies",
  async function (params) {
    const response = await IMDB.getSearchData({ query: params.query, page: params.page });
    return response ? response : [];
  }
);

const moviesSlice = createSlice({
  name: "movies",
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
          state.morePages = false;
        }
      }
    });

    builder.addCase(getSearchMovies.fulfilled, (state, action) => {
      action.payload.forEach((movie) => state.movies.push(movie));
    });
  },
});

export default moviesSlice.reducer;
export const { clearMoviesList } = moviesSlice.actions;
