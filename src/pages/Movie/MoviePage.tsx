import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovie, getTeam } from "../../store/movieSlice";
import { clearMoviesList } from "../../store/moviesSlice";
import { ActorItem } from "./ActorItem";

export const MoviePage = () => {
  const appDispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);
  const director = useAppSelector((state) => state.movie.director);
  const writer = useAppSelector((state) => state.movie.writer);
  const team = useAppSelector((state) => state.movie.team);

  const params = useParams();

  const movieId = params.id === undefined ? 0 : +params.id;

  useEffect(() => {
    appDispatch(clearMoviesList());
    appDispatch(getMovie(movieId));
    appDispatch(getTeam(movieId));
  }, []);

  const runtimeToStr = (runtime: number): string => {
    const minutes = runtime % 60;
    const hours = (runtime - minutes) / 60;
    return hours + "h " + minutes + "m";
  };

  return (
    <div className={styles.movie_details_page}>
      <div className={styles.background_logo}>
        <img
          src={"https://image.tmdb.org/t/p/original" + movie.background}
          alt={movie.background}
        />
      </div>
      <div className={styles.movie_details_container}>
        <div className={styles.movie_details_poster}>
          <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="" />
          <div className={styles.movie_details_circle_rating}>{movie.vote_average}</div>
        </div>
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
      </div>
      <div className={styles.movie_details_castSectionShadow}></div>
      <div className={styles.movie_details_castSection}>
        <h2>Top Cast</h2>
        <div className={styles.actors_row}>
          {team.map((el, index) => {
            return (
              <ActorItem
                key={index}
                avatar={"https://www.themoviedb.org/t/p/w138_and_h175_face" + el.profile_path}
                name={el.name}
                role={el.character ? el.character : ""}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.movie_details_similarMovie}>
        <p>Similar Movies</p>
      </div>
    </div>
  );
};
