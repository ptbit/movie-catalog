export type MovieType = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[]
};

export type FullMovieType = {
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

export type CastType = {
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

export type CrewType = {
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

export type searchDataResponseType = {
  data: MovieType[];
  page: number;
  total_pages: number;
};