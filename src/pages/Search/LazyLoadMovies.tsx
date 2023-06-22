import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieType } from "../../types/movie";
// import { MovieCard } from "./MovieCard";
import styles from "./styles.module.css";

interface LazyLoadMoviesProps {
  movies: MovieType[];
}

function LazyLoadMovies({ movies }: LazyLoadMoviesProps) {
  return (
    <div className={styles.movie_page__content}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster_path={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          id={movie.id}
          searchMode={true}
        />
      ))}
    </div>
  );
}

export default LazyLoadMovies;
