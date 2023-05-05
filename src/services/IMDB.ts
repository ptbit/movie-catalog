import axios from "axios";
import { GenreType } from "../types/genre";
import { MovieType } from "../types/movie";
import { API_KEY, API_URL } from "../utils/constants";

const getDiscoverMovie = async (page: number): Promise<MovieType[]> => {
  const reqUrl = API_URL + "discover/movie?" + API_KEY + "&page=" + page;
  console.log("getDiscoverMovie", reqUrl);
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
  console.log("getGenres");
  const reqUrl = API_URL + "genre/movie/list?" + API_KEY;
  const data = await axios.get(reqUrl);
  const resp = data.data.genres;
  return resp;
};

const getMoviesForGenre = async (genre: number[], page = 1): Promise<MovieType[]> => {
  const genreUrl = genre.length ? "&with_genres=" + genre : ''
  const reqUrl = API_URL + "discover/movie?" + API_KEY + genreUrl + "&page=" + page;
  console.log("getMoviesForGenre", reqUrl);
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

export const IMDB = {
  // getDiscoverMovie,
  getGenres,
  getMoviesForGenre,
};
