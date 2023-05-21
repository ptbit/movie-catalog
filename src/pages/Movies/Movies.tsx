import styles from "./styles.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoadMovies from "./LazyLoadMovies";

import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getGenres } from "../../store/genresSlice";
import { getMoviesForRedux } from "../../store/moviesSlice";
import { SortingSelect } from "./SortingSelect";
import { GenresSelect } from "./GenresSelect";
import { SelectedGenres } from "./SelectedGenres";

export const Movies: FC = () => {
  const appDispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.genres);
  const selectedGenres = useAppSelector((state) => state.selectedGenres.selectedGenres);
  const movies = useAppSelector((state) => state.movies.movies);
  const morePages = useAppSelector((state) => state.movies.morePages);

  const [moviesPage, setMoviesPage] = useState(1);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    appDispatch(getGenres());
  }, [appDispatch]);

  useEffect(() => {
    appDispatch(
      getMoviesForRedux({
        genres: [...selectedGenres],
        pagesId: moviesPage,
        sortBy
      })
    );
  }, [selectedGenres, moviesPage, sortBy]);

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className={styles.movie_page__title}>Explore Movies</div>
          <div className={styles.movie_page__filters}>
            <SelectedGenres setMoviesPage={setMoviesPage} />
            <div className={styles.select_container}>
              <GenresSelect setMoviesPage={setMoviesPage} />
              <SortingSelect sortBy={sortBy} setSortBy={setSortBy} setMoviesPage={setMoviesPage} />
            </div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => {
            setMoviesPage((moviesPage) => moviesPage + 1);
          }}
          hasMore={morePages}
          loader={<div className={styles.need_more_data}>Loading ...</div>}>
          <LazyLoadMovies movies={movies} genres={genres} />
        </InfiniteScroll>

        {movies.length === 0 ? (
          <div className={styles.resultNotFound}>Sorry, Results not found!</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
