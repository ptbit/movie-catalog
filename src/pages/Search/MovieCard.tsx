import styles from "./styles.module.css";
import NoPoster from "../../assets/no-poster.png";
import { Link } from "react-router-dom";

interface MovieCardProps {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}

export const MovieCard = ({ poster_path, title, release_date, id }: MovieCardProps) => {
  return (
    <Link to={"/movies/" + id} className={styles.movie_card}>
      <div className={styles.poster_wrapper}>
        <span className={styles.poster_holder}>
          {<img className={styles.poster} src={poster_path} alt={title}></img>}
        </span>
      </div>

      <div className={styles.text_block}>
        <div className={styles.movie_title}>{title}</div>
        <div className={styles.movie_date}>{release_date}</div>
      </div>
    </Link>
  );
};
