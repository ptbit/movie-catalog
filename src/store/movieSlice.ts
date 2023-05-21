import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";

type MovieType = {
  poster_path: string;
  title: string;
  subtitle: string;
  vote_average: number;
  release_date: string;
  genres: string[];
  background: string;
  overview: string;
  status: string;
  runtime: number;
};

type MovieStateType = {
  movie: MovieType;
};

const initialState: MovieStateType = {
  movie: {
    poster_path: "",
    title: "",
    subtitle: "",
    vote_average: 0,
    release_date: "",
    genres: [],
    background: "",
    overview: "",
    status: "",
    runtime: 0,
  },
};

export const getMovie = createAsyncThunk<MovieType, number>(
  "movie/getMovie",
  async function (movieId) {
    const response = await IMDB.getMovie(movieId);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
  },
});

export default movieSlice.reducer;
