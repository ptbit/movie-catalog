import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearMoviesList, getSearchMovies } from "../../store/moviesSlice";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";

export const SearchPage = () => {
  const params = useParams();
  const appDispatch = useAppDispatch();

  const searchReq = params.search ? params.search : "";
  const morePages = useAppSelector((state) => state.movies.morePages);
  const movies = useAppSelector((state) => state.movies.movies);
  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    appDispatch(clearMoviesList());
    setMoviesPage(1)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    appDispatch(getSearchMovies({ query: searchReq, page: moviesPage }));
  }, [searchReq, moviesPage]);

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className={styles.movie_page__title}>Search results of &apos;{searchReq}&apos;</div>
        </div>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => {
            setMoviesPage((moviesPage) => moviesPage + 1);
          }}
          hasMore={morePages}
          loader={<></>}>
          <LazyLoadMovies movies={movies} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
