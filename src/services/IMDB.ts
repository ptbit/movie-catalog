import axios from "axios";
import { GenreType } from "../types/genre";
import { MovieType } from "../types/movie";
import { API_KEY, API_URL } from "../utils/constants";

const getDiscoverMovie = async (): Promise<MovieType[]> => {
  const reqUrl = API_URL + "discover/movie?" + API_KEY;

  const data = await axios.get(reqUrl);
  const resp = data.data.results;
  return resp.map((res: MovieType) => {
    return {
      id: res.id,
      poster_path: res.poster_path,
      title: res.title,
      vote_average: res.vote_average,
      release_date: res.release_date,
      genre_ids: res.genre_ids,
    };
  });
};
const getGenres = async (): Promise<GenreType[]> => {
  const reqUrl = API_URL + "genre/movie/list?" + API_KEY;
  const data = await axios.get(reqUrl);
  const resp = data.data.genres;
  return resp;
};

export const IMDB = {
  getDiscoverMovie,
  getGenres,
};
