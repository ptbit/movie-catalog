import { FC, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMDB } from "../../services/IMDB";
import { GenreType } from "../../types/genre";
import { MovieType } from "../../types/movie";
import LazyLoadMovies from "./LazyLoadMovies";
import styles from "./styles.module.css";

export const Movies: FC = () => {
  const [pageLimit, setPageLimit] = useState(true);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [availableGenres, setAvailableGenres] = useState<GenreType[]>();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    getMovies();
    getGenres();
    setMoviesPage((moviesPage) => moviesPage + 1);
  }, []);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      getFilteredMovies(selectedGenres);
    }
  }, [selectedGenres]);

  const getMovies = async (page = 1) => {
    const apiData = await IMDB.getDiscoverMovie(page);
    setMovies((prev): MovieType[] => [...prev, ...apiData]);
  };

  const getGenres = async () => {
    const apiData = await IMDB.getGenres();
    setGenres(apiData);
    setAvailableGenres(apiData);
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

  const getFilteredMovies = async (genreIds: number[]) => {
    const apiData = await IMDB.getMoviesForGenre(genreIds);
    setMovies(apiData);
    setMoviesPage(1);
  };

  const genreSelect = (e: React.MouseEvent<HTMLOptionElement>) => {
    const genreId = +e.currentTarget.value;
    setSelectedGenres((prev) => [...prev, genreId]);
    if (availableGenres !== undefined) {
      setAvailableGenres(availableGenres.filter((genre) => genre.id !== genreId));
    }
  };

  const getGenreNameById = (genreId: number): string | undefined => {
    const genreName = genres.find((genre) => genre.id === genreId)?.name;
    return genreName;
  };

  const removeGenreFromList = (e: number) => {
    setSelectedGenres(selectedGenres.filter((item) => item !== e));
    const removingGenre = genres.filter((item) => item.id === e);
    let newState: GenreType[] = [];
    if (availableGenres !== undefined) {
      newState = [...availableGenres, ...removingGenre];
    }

    function compare(a: { id: number; name: string }, b: { id: number; name: string }) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    if (availableGenres !== undefined) {
      // console.log(newState)
      newState.sort(compare);
      // console.log(newState)
    }
    setAvailableGenres(newState);
  };

  return (
    <div className={styles.movie_page}>
      <div className={styles.movie_page__wrapper}>
        <div className={styles.movie_page__header}>
          <div className="movie_page__title">Explore Movies</div>
          <div className="movie_page__filters">
            {selectedGenres.map((selectedGenre, index) => (
              <span
                key={index}
                className={styles.selected_genre}
                onClick={() => {
                  removeGenreFromList(selectedGenre);
                }}>
                {getGenreNameById(selectedGenre)}
              </span>
            ))}
            <select name="genre">
              {availableGenres !== undefined ? (
                availableGenres.map((genre, index) => (
                  <option
                    key={index}
                    value={genre.id}
                    onClick={(e) => {
                      genreSelect(e);
                    }}>
                    {genre.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
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
