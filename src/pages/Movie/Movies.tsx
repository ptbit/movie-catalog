import styles from "./styles.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoadMovies from "./LazyLoadMovies";

import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getGenres } from "../../store/genresSlice";
import { clearMoviesList, getMoviesForRedux } from "../../store/moviesSlice";
import { addSelectedGenre, removeSelectedGenre } from "../../store/selectedGenresSlice";
import { sortByList } from "../../utils/constants";

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
        sortBy: sortBy,
      })
    );
  }, [selectedGenres, moviesPage, sortBy]);

  const getGenreNameById = (genreId: number): string | undefined => {
    const genreName = genres.find((genre) => genre.id === genreId)?.name;
    return genreName;
  };

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className={styles.movie_page__title}>Explore Movies</div>
          <div className={styles.movie_page__filters}>
            <div className={styles.selected_genres}>
              {selectedGenres.map((selectedGenre, index) => (
                <span
                  key={index}
                  className={styles.selected_genre}
                  onClick={() => {
                    appDispatch(removeSelectedGenre(selectedGenre));
                    appDispatch(clearMoviesList());
                    setMoviesPage(1);
                  }}>
                  {getGenreNameById(selectedGenre)}
                </span>
              ))}
            </div>
            <div className={styles.select_container}>
              <select name="genre" className={styles.select_genre}>
                {genres.map((genre, index) => {
                  if (!selectedGenres.includes(genre.id)) {
                    return (
                      <option
                        key={index}
                        value={genre.id}
                        onClick={() => {
                          appDispatch(addSelectedGenre(genre.id));
                          appDispatch(clearMoviesList());
                          setMoviesPage(1);
                        }}>
                        {genre.name}
                      </option>
                    );
                  }
                })}
              </select>
              <select name="sorting" className={styles.select_sort}>
                {sortByList.map((sort, index) => {
                  return (
                    <option
                      key={index}
                      value={sort.value}
                      onClick={() => {
                        appDispatch(clearMoviesList());
                        setMoviesPage(1);
                        setSortBy(sort.value);
                      }}>
                      {sort.name}
                    </option>
                  );
                })}
              </select>
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
