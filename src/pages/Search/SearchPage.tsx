import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { LazyLoadMovies } from "../../components/LazyLoadMovies/LazyLoadMovies";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSearchMovies } from "../../store/moviesSlice";
import styles from "./styles.module.css";

const SearchPage: FC = () => {
  const params = useParams();
  const [moviesPage, setMoviesPage] = useState(1);
  const searchReq = params.search ? params.search : "";

  const appDispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);
  const morePages = useAppSelector((state) => state.movies.morePages);

  useEffect(() => {
    // console.log("searchReq useEffect");
    window.scrollTo(0, 0);
    setMoviesPage(1);
  }, [searchReq]);

  useEffect(() => {
    // console.log("getSearchMovies", searchReq, moviesPage);
    appDispatch(getSearchMovies({ query: searchReq, page: moviesPage }));
  }, [moviesPage, searchReq]);

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

export default SearchPage;
