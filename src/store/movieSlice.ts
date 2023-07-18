import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";
import { CastType, FullMovieType, MovieType } from "../types/movie";

type MovieStateType = {
  movie: FullMovieType;
  team: CastType[];
  director: string;
  writer: string;
  similarMovies: MovieType[];
  videoModalActive: boolean;
  videoKey: string;
};

const initialState: MovieStateType = {
  movie: <FullMovieType>{},
  team: [],
  director: "",
  writer: "",
  similarMovies: [],
  videoModalActive: false,
  videoKey: ''
};

export const getMovie = createAsyncThunk<FullMovieType, number>(
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
  async function (movieId: number) {
    const response = await IMDB.getMovieCredits(movieId);
    return response;
  }
);

export const getSimilar = createAsyncThunk<MovieType[], number>(
  "movie/getSimilar",
  async function (movieId: number) {
    const response = await IMDB.getSimilarMovies(movieId);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    closeVideoModalActive(state) {
      state.videoModalActive = false;
    },
    openVideoModalActive(state) {
      state.videoModalActive = true;
    },
    setVideoKey(state, action) {
      state.videoKey = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.team = action.payload.team;
      state.director = action.payload.director;
      state.writer = action.payload.writer;
    });
    builder.addCase(getSimilar.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
    });
  },
});

export default movieSlice.reducer;
export const {closeVideoModalActive, openVideoModalActive, setVideoKey} = movieSlice.actions
