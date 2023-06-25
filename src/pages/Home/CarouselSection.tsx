import { FC } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieType } from "../../types/movie";
import styles from "./styles.module.css";

type CarouselSectionPropsType = {
  movies: MovieType[];
  sectionTitle: string;
};

export const CarouselSection: FC<CarouselSectionPropsType> = ({ movies, sectionTitle }) => {
  return (
    <div className={styles.carouselSection}>
      <div className={styles.carouselHeader}>
        <span className={styles.carouselTitle}>{sectionTitle}</span>
      </div>
      <div className={styles.carousel}>
        <div className={styles.contentWrapper}>
          <div className={styles.carouselItems}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
