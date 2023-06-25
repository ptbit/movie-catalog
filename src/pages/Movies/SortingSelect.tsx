import { Dispatch, FC, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks";
import { clearMoviesList } from "../../store/moviesSlice";
import { sortByList } from "../../utils/constants";
import styles from "./styles.module.css";

type SortingSelectProps = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  setMoviesPage: Dispatch<SetStateAction<number>>;
};

export const SortingSelect: FC<SortingSelectProps> = ({ sortBy, setSortBy, setMoviesPage }) => {
  const appDispatch = useAppDispatch();

  const sortingClick = (sortingType: string) => {
    if (sortingType !== sortBy) {
      appDispatch(clearMoviesList());
      setMoviesPage(1);
      setSortBy(sortingType);
    }
  };

  return (
    <select name="sorting" className={styles.select_sort}>
      {sortByList.map((sort, index) => {
        return (
          <option
            key={index}
            value={sort.value}
            onClick={() => {
              sortingClick(sort.value);
            }}>
            {sort.name}
          </option>
        );
      })}
    </select>
  );
};
