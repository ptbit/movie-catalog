import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IMDB } from "../services/IMDB";
import { VideoType } from "../types/movie";

type VideosStateType = {
  videos: VideoType[];
};

const initialState: VideosStateType = {
  videos: [],
};

export const getVideos = createAsyncThunk<VideoType[], number>(
  "getVideos",
  async function (id: number) {
    const response = await IMDB.getVideosForMovie(id);
    return response;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export default videosSlice.reducer;
