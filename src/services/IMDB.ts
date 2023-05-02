import axios from "axios";
import { API_KEY, API_URL } from "../utils/constants";

export const getDiscoverMovie = async () => {
  const reqUrl = API_URL + "discover/movie?" + API_KEY;

  const data = await axios.get(reqUrl);
  console.log(data.data.results[0]);
  console.log('https://image.tmdb.org/t/p/w220_and_h330_face'+data.data.results[0].backdrop_path)
};

export const IMDB = {
  getDiscoverMovie: getDiscoverMovie,
};
