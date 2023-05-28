import axios from "axios";
import { GenreType } from "../types/genre";
import { MovieType } from "../types/movie";
import { API_KEY, API_URL } from "../utils/constants";

const getGenres = async (): Promise<GenreType[] | boolean> => {
  const reqUrl = API_URL + "genre/movie/list?" + API_KEY;
  const data = await axios.get(reqUrl);
  if (data.status != 200) {
    return false;
  }
  return data.data.genres;
};

const getMoviesForGenre = async (
  genre: number[],
  page = 1,
  setMorePages: React.Dispatch<React.SetStateAction<boolean>>,
  sortBy: string
): Promise<MovieType[]> => {
  const sortByUrl = sortBy === "" ? "" : "&sort_by=" + sortBy;
  const genreUrl = genre.length ? "&with_genres=" + genre : "";
  const reqUrl = API_URL + "discover/movie?" + API_KEY + genreUrl + "&page=" + page + sortByUrl;
  const data = await axios.get(reqUrl);

  data.data.total_pages <= 1 ? setMorePages(false) : setMorePages(true);

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

const getMovies = async (
  genres: number[],
  page = 1,
  sortBy: string
): Promise<MovieType[] | boolean> => {
  const sortByUrl = sortBy === "" ? "" : "&sort_by=" + sortBy;
  const genreUrl = genres.length ? "&with_genres=" + genres : "";
  const reqUrl = API_URL + "discover/movie?" + API_KEY + genreUrl + "&page=" + page + sortByUrl;
  const data = await axios.get(reqUrl);

  const resp = data.data.results;
  if (data.data.total_pages >= page) {
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
  } else {
    return false;
  }
};

type GetMovieResponseType = {
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

const getMovie = async (movieId: number): Promise<GetMovieResponseType> => {
  const reqUrl = API_URL + "movie/" + movieId + "?" + API_KEY;
  const data = await axios.get(reqUrl);

  const genresArr: string[] = [];
  const movieGenres: GenreType[] = data.data.genres;

  movieGenres.forEach((genre) => {
    genresArr.push(genre.name);
  });

  const response = {
    poster_path: data.data.poster_path,
    title: data.data.title,
    subtitle: data.data.tagline,
    vote_average: data.data.vote_average.toFixed(1),
    release_date: data.data.release_date,
    genres: genresArr,
    background: data.data.backdrop_path,
    overview: data.data.overview,
    status: data.data.status,
    runtime: data.data.runtime,
  };
  return response;
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

type CrewType = {
  adult: false;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type GetMovieCreditsResponseType = {
  team: CastType[];
  director: string;
  writer: string;
};

const getMovieCredits = async (movieId: number): Promise<GetMovieCreditsResponseType> => {
  const reqUrl = API_URL + "movie/" + movieId + "/credits?" + API_KEY;
  const data = await axios.get(reqUrl);
  const crew: CrewType[] = data.data.crew;

  const team: CastType[] = data.data.cast;
  // console.log(data.data.crew); Louis Leterrier
  const director = crew.find((element) => element.job === "Director")?.original_name;
  let writer = crew.find((el) => el.job === "Writer")?.original_name;
  if (writer === undefined) {
    writer = crew.find((el) => el.job === "Screenplay")?.original_name;
  }
  if (writer === undefined) {
    writer = crew.find((el) => el.department === "Writing")?.original_name;
  }
  if (director != undefined && writer != undefined) {
    const response = {
      team,
      director,
      writer,
    };
    return response;
  } else {
    const response = {
      team,
      director: "NOT FOUND",
      writer: "NOT FOUND",
    };
    return response;
  }
};

const getSimilarMovies = async (movieId: number): Promise<MovieType[]> => {
  const reqUrl = API_URL + "movie/" + movieId + "/similar?" + API_KEY;
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
  getGenres,
  getMoviesForGenre,
  getMovies,
  getMovie,
  getMovieCredits,
  getSimilarMovies,
};
