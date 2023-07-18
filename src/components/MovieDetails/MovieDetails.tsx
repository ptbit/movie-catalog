import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { FullMovieType } from "../../types/movie";
import { runtimeToStr } from "../../utils/helpers";
import { PlayVideoBtn } from "../PlayVideoBtn/PlayVideoBtn";
import styles from "./styles.module.css";

export const MovieDetails: FC<{
  movie: FullMovieType;
  videoKey: string;
}> = ({ movie, videoKey }) => {
  const director = useAppSelector((state) => state.movie.director);
  const writer = useAppSelector((state) => state.movie.writer);

  return (
    <div className={styles.movie_details_content}>
      <h1 className={styles.movie_details_title}>{movie.title}</h1>
      <h3 className={styles.movie_details_subtitle}>{movie.subtitle}</h3>
      <div className={styles.movie_details_genres}>
        {movie.genres?.map((genre, index) => {
          return (
            <div key={index} className={styles.movie_details_genre}>
              {genre}
            </div>
          );
        })}
      </div>
      {videoKey !== "" ? (
        <span className={styles.movie_details_overview}>
          <PlayVideoBtn videoKey={videoKey} />
        </span>
      ) : (
        <h2 className={styles.movie_details_overview}>No Official Video</h2>
      )}

      <div className={styles.movie_details_overview}>
        <div className={styles.movie_details_overview_title}>Overview</div>
        <div className={styles.movie_details_overview_description}>{movie.overview}</div>
      </div>
      <div className={styles.movie_details_info}>
        <div className={styles.movie_details_info_item}>
          <span className={styles.movie_details_info_item_title}>Status:</span>
          <span className={styles.movie_details_info_item_content}>{movie.status}</span>
        </div>
        <div className={styles.movie_details_info_item}>
          <span className={styles.movie_details_info_item_title}>Release Date:</span>
          <span className={styles.movie_details_info_item_content}>{movie.release_date}</span>
        </div>
        <div className={styles.movie_details_info_item}>
          <span className={styles.movie_details_info_item_title}>Runtime:</span>
          <span className={styles.movie_details_info_item_content}>
            {runtimeToStr(movie.runtime)}
          </span>
        </div>
      </div>
      <div className={styles.movie_details_info}>
        <div className={styles.movie_details_info_item}>
          <span className={styles.movie_details_info_item_title}>Director:</span>
          <span className={styles.movie_details_info_item_content}>{director}</span>
        </div>
      </div>
      <div className={styles.movie_details_info}>
        <div className={styles.movie_details_info_item}>
          <span className={styles.movie_details_info_item_title}>Writer:</span>
          <span className={styles.movie_details_info_item_content}>{writer}</span>
        </div>
      </div>
    </div>
  );
};
