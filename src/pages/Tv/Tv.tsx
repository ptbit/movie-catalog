import { FC, useState, useEffect } from "react";
import { getGenres } from "../../store/genresSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearMoviesList, getMoviesForRedux } from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedGenre, removeSelectedGenre } from "../../store/selectedGenresSlice";
import { RootState } from "../../store";

export const Tv: FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const genres = useAppSelector((state) => state.genres.genres);
  const movies = useAppSelector((state) => state.movies.movies);
  const selectedGenres = useSelector((state: RootState) => state.selectedGenres.selectedGenres);

  useEffect(() => {
    appDispatch(getGenres());
  }, [appDispatch]);

  const clickOnSelect = (genreId: number) => {
    dispatch(addSelectedGenre(genreId));
    appDispatch(
      getMoviesForRedux({
        genres: [...selectedGenres, genreId],
        pagesId: 1,
        sortBy: "popularity.desc",
      })
    );
  };

  const clearSelectedGenres = () => {
    dispatch(removeSelectedGenre());
    dispatch(clearMoviesList());
  };

  return (
    <div className="page-container" style={{ minHeight: "100px" }}>
      <h1 className="page-container" style={{ minHeight: "100px" }}>
        Tv{" "}
      </h1>
      <button
        onClick={() => {
          clearSelectedGenres();
        }}>
        X
      </button>
      <div>
        <select name="genre">
          {genres.map((genre, index) => {
            if (selectedGenres.includes(genre.id)) {
              return;
            }
            return (
              <option
                key={index}
                value={genre.id}
                onClick={() => {
                  clickOnSelect(genre.id);
                }}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <ul>
          {movies.map((movie, index) => {
            return <li key={index}>{movie.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
