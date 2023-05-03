import { FC, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMDB } from "../../services/IMDB";
import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";

export const Movies: FC = () => {
  // IMDB.getGenres()
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [pageLimit, setPageLimit] = useState(true);

  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    getMovies();
    getGenres();
    setMoviesPage((moviesPage) => moviesPage + 1);
  }, []);

  const getMovies = async (page = 1) => {
    const apiData = await IMDB.getDiscoverMovie(page);
    setMovies((prev): MovieType[] => [...prev, ...apiData]);
  };
  const getGenres = async () => {
    const apiData = await IMDB.getGenres();
    setGenres(apiData);
  };

  const getMoreMovies = () => {
    if (moviesPage > 10) {
      setPageLimit(false);
      return;
    } else {
        getMovies(moviesPage);
        setMoviesPage((moviesPage) => moviesPage + 1);
    }
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
        <InfiniteScroll
          dataLength={movies.length}
          next={getMoreMovies}
          hasMore={pageLimit}
          loader={<div className="need-more-data">LOADING</div>}>
          <LazyLoadMovies movies={movies} genres={genres} />
        </InfiniteScroll>

        {!pageLimit ? <div className="need-more-data">It`s all for today</div> : <></>}
      </div>
    </div>
  );
};
