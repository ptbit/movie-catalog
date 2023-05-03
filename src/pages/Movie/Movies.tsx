import { FC, useState, useEffect, Suspense, lazy } from "react";
import { IMDB } from "../../services/IMDB";
import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";

export const Movies: FC = () => {
  // IMDB.getGenres()
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log('need more data')
  }, [inView]);

  const [isOpenLazy, setIsOpenLazy] = useState<boolean>(false);
  const [moviesPage, setMoviesPage] = useState(2);

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenreType[]>([]);
  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  const getMovies = async (page = 1) => {
    const apiData = await IMDB.getDiscoverMovie(page);
    setMovies((prev): MovieType[] => [...prev, ...apiData]);
  };
  const getGenres = async () => {
    const apiData = await IMDB.getGenres();
    setGenres(apiData);
  };

  const MyLazyMovies = lazy(() => import("./LazyLoadMovies"));

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
        <LazyLoadMovies movies={movies} genres={genres} />
        <button
          onClick={() => {
            setMoviesPage((moviesPage) => moviesPage + 1);
            getMovies(moviesPage);
            setIsOpenLazy(true);
          }}
          ref={ref}>
          Load movies
        </button>
        {/* {isOpenLazy && (
          <Suspense>
            <MyLazyMovies movies={movies} genres={genres} />
          </Suspense>
        )} */}
      </div>
    </div>
  );
};
