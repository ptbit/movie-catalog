import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import movieReducer from "./movieSlice";
import trendingReducer from "./trendingSlice";
import topRatedReducer from "./topRatedSlice";
import selectedGenresReducer from "./selectedGenresSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedGenres: selectedGenresReducer,
    movie: movieReducer,
    trending: trendingReducer,
    topRated: topRatedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
