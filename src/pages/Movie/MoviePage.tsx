import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovie, getSimilar, getTeam } from "../../store/movieSlice";
import { clearMoviesList } from "../../store/moviesSlice";
import { ActorItem } from "./ActorItem";
import { SimilarMovieCard } from "./SimilarMovieCard";
import { runtimeToStr } from "../../utils/constants";
import styles from "./styles.module.css";

export const MoviePage = () => {
  const appDispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);
  const director = useAppSelector((state) => state.movie.director);
  const writer = useAppSelector((state) => state.movie.writer);
  const team = useAppSelector((state) => state.movie.team);
  const similarMovies = useAppSelector((state) => state.movie.similarMovies);

  const params = useParams();

  const movieId = params.id === undefined ? 0 : +params.id;

  useEffect(() => {
    appDispatch(clearMoviesList());
    appDispatch(getMovie(movieId));
    appDispatch(getTeam(movieId));
    appDispatch(getSimilar(movieId));
  }, [params]);

  return (
    <div className={styles.movie_details_page}>
      <div className={styles.background_logo}>
        <img
          src={"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + movie.background}
          alt={movie.background}
        />
      </div>
      <div className={styles.movie_details_container}>
        <div className={styles.movie_details_poster}>
          <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} alt="" />
          <div className={styles.movie_details_circle_rating}>{movie.vote_average}</div>
        </div>
        {/* COMPONENT MOVIE DETAILS CONTENT START? */}
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
        {/* COMPONENT MOVIE DETAILS CONTENT END */}
      </div>

      <div className={styles.movie_details_castSectionShadow}></div>

      <div className={styles.movie_details_castSection}>
        <h2>Top Cast</h2>
        <div className={styles.actors_row}>
          {team.map((el, index) => {
            return (
              <ActorItem
                key={index}
                avatar={"https://image.tmdb.org/t/p/w138_and_h175_face" + el.profile_path}
                name={el.name}
                role={el.character ? el.character : ""}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.movie_details_similarMovie__Section}>
        <h2 className={styles.movie_details_similarMovie__Title}>Similar Movies (API opinion)</h2>
        <div className={styles.movie_details_similarMovie}>
          {similarMovies.map(
            ({ id, poster_path, title, vote_average, release_date, genre_ids }) => (
              <SimilarMovieCard
                key={id}
                id={id}
                poster_path={"https://image.tmdb.org/t/p/w220_and_h330_face" + poster_path}
                title={title}
                vote_average={vote_average}
                release_date={release_date}
                genre_ids={genre_ids}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
