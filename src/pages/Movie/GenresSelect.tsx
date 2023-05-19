import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearMoviesList } from "../../store/moviesSlice";
import { addSelectedGenre } from "../../store/selectedGenresSlice";
import styles from "./styles.module.css";

type GenresSelectProps = {
  setMoviesPage: Dispatch<SetStateAction<number>>;
};

export const GenresSelect = ({ setMoviesPage }: GenresSelectProps) => {
  const appDispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.genres);
  const selectedGenres = useAppSelector((state) => state.selectedGenres.selectedGenres);
  return (
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
  );
};
