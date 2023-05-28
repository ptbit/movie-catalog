import styles from "./styles.module.css";
import NoPoster from "../../assets/no-poster.png";
import { Link } from "react-router-dom";
import { Genres } from "../../services/Genres";

interface MovieCardProps {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  id: number;
}

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
  release_date,
  genre_ids,
  id,
}: MovieCardProps) => {
  
  return (
    <Link to={"/movies/" + id} className={styles.movie_card}>
      <div className={styles.poster_wrapper}>
        <span className={styles.poster_holder}>
          {poster_path === "https://image.tmdb.org/t/p/w220_and_h330_facenull" ? (
            <img src={NoPoster} alt="NoPoster"></img>
          ) : (
            <img className={styles.poster} src={poster_path} alt={title}></img>
          )}
        </span>

        <div className={styles.circleRating}>
          <span className={styles.rating_text}>{vote_average}</span>
        </div>
        <div className={styles.genres}>
          {genre_ids.map((genreId: number) => {
            return (
              <div className={styles.genre} key={genreId}>
                {
                  Genres.getGenreNameById(genreId)
                }
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.text_block}>
        <div className={styles.movie_title}>{title}</div>
        <div className={styles.movie_date}>{release_date}</div>
      </div>
    </Link>
  );
};
