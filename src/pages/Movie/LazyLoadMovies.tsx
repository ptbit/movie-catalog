import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import { MovieCard } from "./MovieCard";
import styles from "./styles.module.css";

interface LazyLoadMoviesProps {
  movies: MovieType[];
  genres: GenreType[];
}

function LazyLoadMovies({ movies, genres }: LazyLoadMoviesProps) {

  return (
    <>
      <div className={styles.movie_page__content}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            genre_ids={movie.genre_ids}
            genres={genres}
          />
        ))}
      </div>
    </>
  );
}

export default LazyLoadMovies;
