import { FC, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMDB } from "../../services/IMDB";
import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";

export const Movies: FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [moviesPage, setMoviesPage] = useState(1);
  const [morePages, setMorePages] = useState(true);
  const [sortBy, setSortBy] = useState("");

  const sortByList = [
    { name: "Popularity Descending", value: "popularity.desc" },
    { name: "Popularity Ascending", value: "popularity.asc" },
    { name: "Rating Descending", value: "vote_average.desc" },
    { name: "Rating Ascending", value: "vote_average.asc" },
    { name: "Release Date Descending", value: "release_date.desc" },
    { name: "Release Date Ascending", value: "release_date.asc" },
    { name: "Revenue Descending", value: "revenue.desc" },
    { name: "Revenue Ascending", value: "revenue.asc" },
    { name: "Title (A-Z)", value: "original_title.asc" },
  ];

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [selectedGenres, moviesPage, sortBy]);

  const getGenres = async () => {
    const apiResponse = await IMDB.getGenres();
    setGenres(apiResponse);
  };

  const getMovies = async () => {
    const apiResponse = await IMDB.getMoviesForGenre(
      selectedGenres,
      moviesPage,
      setMorePages,
      sortBy
    );
    setMovies((prev): MovieType[] => [...prev, ...apiResponse]);
  };

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
                    setSelectedGenres(selectedGenres.filter((genre) => genre !== selectedGenre));
                    setMovies([]);
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
                          setSelectedGenres((prev) => [...prev, genre.id]);
                          setMovies([]);
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
                        setMovies([]);
                        setMoviesPage(1);
                        setSortBy(sort.value);
                      }}>
                      {sort.name}
                    </option>
                  );
                })}
              </select>

              {/* {value: "popularity +", name: "popularity.asc" },
              { value: "popularity -", name: "popularity.desc" }, */}
            </div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => {
            setMoviesPage((moviesPage) => moviesPage + 1);
            console.log("need more", moviesPage);
          }}
          hasMore={morePages}
          // loader={<div className="need-more-data">LOADING</div>}>
          loader={<></>}>
          <LazyLoadMovies movies={movies} genres={genres} />
        </InfiniteScroll>

        {movies.length === 0 ? (
          <div className={styles.resultNotFound}>Sorry, Results not found!</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
