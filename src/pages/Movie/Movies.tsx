import { FC, useState, useEffect } from "react";
import { IMDB } from "../../services/IMDB";
import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import { MovieCard } from "./MovieCard";
import styles from "./styles.module.css";

export const Movies: FC = () => {
  // IMDB.getGenres()
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenreType[]>([]);
  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  const getMovies = async () => {
    const apiData = await IMDB.getDiscoverMovie();
    setMovies(apiData);
  };
  const getGenres = async () => {
    const apiData = await IMDB.getGenres();
    setGenres(apiData);
  };

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className="movie_page__title">Explore Movies</div>
          <div className="movie_page__filters">
            {/* <select name="Genre" id="">1</select>
            <select name="Sorting" id="">2</select> */}
          </div>
        </div>

        <div className={styles.movie_page__content}>
          {movies.map((movie) => (
            // console.log(movie)
            <MovieCard
              key={movie.id}
              poster_path={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              genre_ids={movie.genre_ids}
              genres={genres}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
