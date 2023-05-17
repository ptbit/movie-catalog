import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moviesSlice";
import genreReducer from "./genresSlice";
import selectedGenresReducer from "./selectedGenresSlice";

// export default configureStore({
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    genres: genreReducer,
    selectedGenres: selectedGenresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
