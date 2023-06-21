import axios from "axios";
import { GenreType } from "../types/genre";
import { API_URL, HEADERS as headers } from "../utils/constants";

const getGenres = async () => {
  const reqUrl = API_URL + "genre/movie/list";
  const data = await axios.get(reqUrl, { headers });
  if (data.status != 200) {
    return false;
  }
  localStorage.setItem("genres", JSON.stringify(data.data.genres));
};

const getGenreNameById = (genreId: number): string => {
  const genres = localStorage.getItem("genres");
  if (genres === null) {
    getGenres();
  }
  if (genres != null) {
    const genresArr: GenreType[] = JSON.parse(genres);
    const genreName = genresArr.find((genre) => genre.id === genreId)?.name;
    if (genreName != undefined) {
      return genreName;
    }
  }
  return "";
};

export const allGenres = (): GenreType[] => {
  const genres = localStorage.getItem("genres");
  if (genres === null) {
    getGenres();
  }
  if (genres != null) {
    const genresArr: GenreType[] = JSON.parse(genres);
    return genresArr;
  }
  return [];
};

export const Genres = {
  getGenreNameById,
  allGenres,
};
