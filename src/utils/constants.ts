export const API_KEY = process.env.REACT_APP_API_KEY
export const API_URL = "https://api.themoviedb.org/3/";

export const sortByList = [
  { name: "Popularity Descending", value: "popularity.desc" },
  { name: "Popularity Ascending", value: "popularity.asc" },
  { name: "Rating Descending", value: "vote_average.desc" },
  { name: "Rating Ascending", value: "vote_average.asc" },
  { name: "Release Date Descending", value: "release_date.desc" },
  { name: "Release Date Ascending", value: "release_date.asc" },
  { name: "Revenue Descending", value: "revenue.desc" },
  { name: "Revenue Ascending", value: "revenue.asc" },
  { name: "Title (A-Z)", value: "original_title.asc" },
];


export const HEADERS = {
  accept: "application/json",
  Authorization: "Bearer " + API_KEY,
};