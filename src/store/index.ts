import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import movieReducer from "./movieSlice";
import genreReducer from "./genresSlice";
import selectedGenresReducer from "./selectedGenresSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genreReducer,
    selectedGenres: selectedGenresReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
