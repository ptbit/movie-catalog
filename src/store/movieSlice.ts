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

type CastType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
};

type MovieStateType = {
  movie: MovieType;
  team: CastType[];
  director: string;
  writer: string;
};

const initialState: MovieStateType = {
  movie: <MovieType>{},
  team: [],
  director: "",
  writer: "",
};

export const getMovie = createAsyncThunk<MovieType, number>(
  "movie/getMovie",
  async function (movieId) {
    const response = await IMDB.getMovie(movieId);
    return response;
  }
);

type GetTeamResponseType = {
  team: CastType[];
  director: string;
  writer: string;
};
export const getTeam = createAsyncThunk<GetTeamResponseType, number>(
  "movie/getTeam",
  async function (movieId) {
    const response = await IMDB.getMovieCredits(movieId);
    // console.log(response);
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
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.team = action.payload.team;
      state.director = action.payload.director;
      state.writer = action.payload.writer;
    });
  },
});

export default movieSlice.reducer;
