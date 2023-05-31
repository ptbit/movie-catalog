import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearMoviesList, getSearchMovies } from "../../store/moviesSlice";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";

export const SearchPage = () => {
  const params = useParams();
  const appDispatch = useAppDispatch();

  const searchReq = params.search ? params.search : "";
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    appDispatch(clearMoviesList());
  }, []);

  useEffect(() => {
    appDispatch(getSearchMovies(searchReq ? searchReq : ""));
  }, []);
  console.log(movies);

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className={styles.movie_page__title}>Search results of &apos;{searchReq}&apos;</div>
        </div>
      <LazyLoadMovies movies={movies} />
      </div>
    </div>
  );
};
// `&apos;`, `&lsquo;`, `&#39;`
