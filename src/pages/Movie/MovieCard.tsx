import { GenreType } from "../../types/genre";
import styles from "./styles.module.css";

interface MovieCardProps {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genres: GenreType[];
}

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
  release_date,
  genre_ids,
  genres,
}: MovieCardProps) => {
  const getGenreName = (genreId: number): string | undefined => {
    const genreName = genres.find((genre) => genre.id === genreId)?.name;
    return genreName;
  };
  

  return (
    <div className={styles.movie_card}>
      <div className={styles.poster_wrapper}>
        <span className={styles.poster_holder}>
          <img className={styles.poster} src={poster_path}></img>
        </span>

        <div className={styles.circleRating}>
          <span className={styles.rating_text}>{vote_average}</span>
        </div>
        <div className={styles.genres}>
          {genre_ids.map((genreId: number) => {
            return (
              <div className={styles.genre} key={genreId}>
                {getGenreName(genreId)}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.text_block}>
        <div className={styles.movie_title}>{title}</div>
        <div className={styles.movie_date}>{release_date}</div>
      </div>
    </div>
  );
};
