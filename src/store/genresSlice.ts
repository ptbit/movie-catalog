import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";

type GenreType = {
  id: number;
  name: string;
};

type GenreStateType = {
  genres: GenreType[];
  loading: boolean;
  error: null | string;
};

const initialState: GenreStateType = {
  genres: [],
  loading: false,
  error: null,
};

export const getGenres = createAsyncThunk<GenreType[] | boolean, void, { rejectValue: string }>(
  "genres/getGenres",
  async function (_, { rejectWithValue }) {
    const response = await IMDB.getGenres();
    if (response === true || response === false) {
      return rejectWithValue("Error get genres from API");
    } else {
      return response;
    }
  }
);

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.loading = false;
      if (typeof action.payload != "boolean") {
        state.genres = action.payload;
      }
    });
    builder.addCase(getGenres.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export default genreSlice.reducer;
