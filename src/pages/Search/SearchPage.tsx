import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { LazyLoadMovies } from "../../components/LazyLoadMovies/LazyLoadMovies";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearMoviesList, getSearchMovies } from "../../store/moviesSlice";
import styles from "./styles.module.css";

export const SearchPage: FC = () => {
  const params = useParams();
  const appDispatch = useAppDispatch();

  const searchReq = params.search ? params.search : "";
  const movies = useAppSelector((state) => state.movies.movies);
  const morePages = useAppSelector((state) => state.movies.morePages);
  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    appDispatch(clearMoviesList());
    setMoviesPage(1);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    appDispatch(getSearchMovies({ query: searchReq, page: moviesPage }));
  }, [searchReq, moviesPage]);

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          {movies.length === 0 ? (
            <div className={styles.search_page_noResult}>Sorry, Results not found!</div>
          ) : (
            <div className={styles.movie_page__title}>
              Search results of &apos;{searchReq}&apos;
            </div>
          )}
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
