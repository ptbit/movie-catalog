import { MovieCard } from "../MovieCard/MovieCard";
import { MovieType } from "../../types/movie";
import styles from "./styles.module.css";

interface LazyLoadMoviesProps {
  movies: MovieType[];
}

export const LazyLoadMovies = ({ movies }: LazyLoadMoviesProps) => {
  return (
    <div className={styles.movie_page__content}>
      {movies.map((movie: MovieType) => (
        <MovieCard
          key={movie.id}
          poster_path={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
          genre_ids={movie.genre_ids}
          id={movie.id}
        />
      ))}
    </div>
  );
};
