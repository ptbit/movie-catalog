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
  const [selectedGenres, setSelectedGenres] = useState<number[]>([28,16,99]);
  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [selectedGenres, moviesPage]);


  const getGenres = async () => {
    const apiResponse = await IMDB.getGenres();
    setGenres(apiResponse);
  };

  const getMovies = async () => {
    const apiResponse = await IMDB.getMoviesForGenre(selectedGenres, moviesPage);
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
          <div className="movie_page__title">Explore Movies</div>
          <div className="movie_page__filters">
            {selectedGenres.map((selectedGenre, index) => (
              <span
                key={index}
                className={styles.selected_genre}
                onClick={() => {
                  setSelectedGenres(selectedGenres.filter((genre) => genre !== selectedGenre));
                  setMovies([])
                  setMoviesPage(1)
                }}>
                {getGenreNameById(selectedGenre)}
              </span>
            ))}
            <select name="genre" className={styles.select_genre}>
              {genres.map((genre, index) => {
                if (!selectedGenres.includes(genre.id)) {
                  return (
                    <option
                      key={index}
                      value={genre.id}
                      onClick={() => {
                        setSelectedGenres((prev) => [...prev, genre.id]);
                        setMovies([])
                        setMoviesPage(1)
                      }}>
                      {genre.name}
                    </option>
                  );
                }
              })}
            </select>
            {/* <select name="Genre" id="">1</select>
            <select name="Sorting" id="">2</select> */}
          </div>
        </div>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => {
            setMoviesPage((moviesPage) => moviesPage + 1);
            console.log("need more", moviesPage);
          }}
          hasMore={true}
          loader={<div className="need-more-data">LOADING</div>}>
          <LazyLoadMovies movies={movies} genres={genres} />
        </InfiniteScroll>

        {/* {!pageLimit ? <div className="need-more-data">It`s all for today</div> : <></>} */}
      </div>
    </div>
  );
};
