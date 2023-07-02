import axios from "axios";
import { GenreType } from "../types/genre";
import { CastType, CrewType, FullMovieType, MovieType, searchDataResponseType } from "../types/movie";
import { API_URL, HEADERS as headers } from "../utils/constants";

const getGenres = async (): Promise<GenreType[] | boolean> => {
  const reqUrl = API_URL + "genre/movie/list";
  const data = await axios.get(reqUrl, { headers });
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
  const reqUrl = API_URL + "discover/movie?" + genreUrl + "&page=" + page + sortByUrl;
  const data = await axios.get(reqUrl, { headers });

  data.data.total_pages <= 1 ? setMorePages(false) : setMorePages(true);

  const resp = data.data.results;
  return resp.map((res: MovieType) => {
    return {
      id: res.id,
      poster_path: res.poster_path,
      title: res.title,
      vote_average: res.vote_average.toFixed(1),
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
  const reqUrl = API_URL + "discover/movie?" + genreUrl + "&page=" + page + sortByUrl;
  const data = await axios.get(reqUrl, { headers });

  const resp = data.data.results;
  if (data.data.total_pages >= page) {
    return resp.map((res: MovieType) => {
      return {
        id: res.id,
        poster_path: res.poster_path,
        title: res.title,
        vote_average: res.vote_average.toFixed(1),
        release_date: res.release_date,
        genre_ids: res.genre_ids,
      };
    });
  } else {
    return false;
  }
};

const getMovie = async (movieId: number): Promise<FullMovieType> => {
  const reqUrl = API_URL + "movie/" + movieId;
  const data = await axios.get(reqUrl, { headers });

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

type GetMovieCreditsResponseType = {
  team: CastType[];
  director: string;
  writer: string;
};

const getMovieCredits = async (movieId: number): Promise<GetMovieCreditsResponseType> => {
  const reqUrl = API_URL + "movie/" + movieId + "/credits";

  const data = await axios.get(reqUrl, { headers });

  const crew: CrewType[] = data.data.crew;
  const team: CastType[] = data.data.cast;

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
  const reqUrl = API_URL + "movie/" + movieId + "/similar";

  const data = await axios.get(reqUrl, { headers });

  const resp = data.data.results;
  return resp.map((res: MovieType) => {
    return {
      id: res.id,
      poster_path: res.poster_path,
      title: res.title,
      vote_average: +res.vote_average.toFixed(1),
      release_date: res.release_date,
      genre_ids: res.genre_ids,
    };
  });
};

type ParamsType = {
  page?: number;
  sortBy?: string;
  with_genres?: string;
  query: string;
};


const getSearchData = async (params: ParamsType): Promise<searchDataResponseType | undefined> => {
  try {
    const data = await axios.get(API_URL + "search/multi", {
      headers,
      params,
    });
    if (params.page === undefined) {
      params.page = 1;
    }
    const resp = data.data.results;

    if (data.data.total_pages >= params.page) {
      type resType = {
        id: number;
        poster_path: string;
        title: string;
        vote_average: number;
        release_date: string;
        genre_ids: number[];
        name: string;
      };
      const ans = resp.map((res: resType): MovieType => {
        return {
          id: res.id,
          poster_path: res.poster_path ? res.poster_path : "",
          title: res.title ? res.title : res.name,
          vote_average: res.vote_average ? +res.vote_average.toFixed(1) : 0,
          release_date: res.release_date,
          genre_ids: res.genre_ids,
        };
      });
      const response: searchDataResponseType = {
        data: [],
        page: data.data.page,
        total_pages: data.data.total_pages,
      };
      response.data = ans.filter(
        (movie: MovieType) =>
          movie.title !== undefined && movie.poster_path !== "" && movie.poster_path !== null
      );
      // console.log("response:::", response.data);
      return response;
    }
  } catch (err) {
    // console.log(err);
  }
};

const getRandomPoster = async (): Promise<string> => {
  const { data } = await axios.get(API_URL + "movie/upcoming", {
    headers,
  });
  const upcomingMovie = data.results[Math.floor(Math.random() * data.results.length)];

  return upcomingMovie.backdrop_path;
};

const getTrendingMovies = async (): Promise<MovieType[]> => {
  const data = await axios.get(API_URL + "/trending/movie/day", { headers });
  const resp = data.data.results;

  return resp.map((res: MovieType) => {
    return {
      id: res.id,
      poster_path: res.poster_path,
      title: res.title,
      vote_average: +res.vote_average.toFixed(1),
      release_date: res.release_date,
      genre_ids: res.genre_ids,
    };
  });
};

const getTopRatedMovies = async (): Promise<MovieType[]> => {
  const data = await axios.get(API_URL + "/movie/top_rated", { headers });
  const resp = data.data.results;

  return resp.map((res: MovieType) => {
    return {
      id: res.id,
      poster_path: res.poster_path,
      title: res.title,
      vote_average: +res.vote_average.toFixed(1),
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
  getSearchData,
  getRandomPoster,
  getTrendingMovies,
  getTopRatedMovies,
};
