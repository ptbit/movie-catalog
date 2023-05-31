import styles from "./styles.module.css";
import NoPoster from "../../assets/no-poster.png";
import { Link } from "react-router-dom";

interface MovieCardProps {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}

export const MovieCard = ({
  poster_path,
  title,
  release_date,
  id,
}: MovieCardProps) => {
  console.log(poster_path)
  return (
    <Link to={"/movies/" + id} className={styles.movie_card}>
      <div className={styles.poster_wrapper}>
        <span className={styles.poster_holder}>
          {poster_path === "https://image.tmdb.org/t/p/w220_and_h330_facenull"  ? (
            <img src={NoPoster} alt="NoPoster"></img>
          ) : (
            <img className={styles.poster} src={poster_path} alt={title}></img>
          )}
        </span>
      </div>

      <div className={styles.text_block}>
        <div className={styles.movie_title}>{title}</div>
        <div className={styles.movie_date}>{release_date}</div>
      </div>
    </Link>
  );
};
