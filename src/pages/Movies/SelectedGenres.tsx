import { Dispatch, FC, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Genres } from "../../services/Genres";
import { clearMoviesList } from "../../store/moviesSlice";
import { removeSelectedGenre } from "../../store/selectedGenresSlice";
import styles from "./styles.module.css";

export const SelectedGenres: FC<{
  setMoviesPage: Dispatch<SetStateAction<number>>;
}> = ({ setMoviesPage }) => {
  const appDispatch = useAppDispatch();
  const genres = Genres.allGenres();

  const selectedGenres = useAppSelector((state) => state.selectedGenres.selectedGenres);
  const getGenreNameById = (genreId: number): string | undefined => {
    const genreName = genres.find((genre) => genre.id === genreId)?.name;
    return genreName;
  };

  return (
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
  );
};
