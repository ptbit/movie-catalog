import { FC } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovie, getSimilar, getTeam, getVideos } from "../../store/movieSlice";
import { clearMoviesList } from "../../store/moviesSlice";
import { ActorItem } from "../../components/ActorItem/ActorItem";
import { VideoItem } from "../../components/VideoItem/VideoItem";
import styles from "./styles.module.css";

export const MoviePage:FC = () => {
  const appDispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);
  const team = useAppSelector((state) => state.movie.team);
  const modalActive = useAppSelector((state) => state.movie.videoModalActive);
  const similarMovies = useAppSelector((state) => state.movie.similarMovies);
  const videos = useAppSelector((state) => state.movie.videos);
  const modalVideoKey = useAppSelector((state) => state.movie.videoKey);

  const params = useParams();
  const movieId = params.id === undefined ? 0 : +params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    appDispatch(clearMoviesList());
    appDispatch(getMovie(movieId));
    appDispatch(getTeam(movieId));
    appDispatch(getSimilar(movieId));
    appDispatch(getVideos(movieId));
  }, [params]);

  return (
    <div className={styles.movie_details_page}>
      <div className={styles.background_logo}>
        <img
          src={"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + movie.background}
          alt={movie.background}
        />
      </div>
      <div className={styles.movie_details_castSectionShadow}></div>
      <div className={styles.movie_details_container}>
        <div className={styles.movie_details_poster}>
          <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="" />
          <div className={styles.movie_details_circle_rating}>{movie.vote_average}</div>
        </div>
        <MovieDetails movie={movie} videoKey={videos.length > 0 ? videos[0].key : ""} />
      </div>

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

      {videos.length > 0 && (
        <div className={styles.movie_details_videos__section}>
          <Modal modalActive={modalActive} videoKey={modalVideoKey} />
          <h2 className={styles.movie_details_videos__title}>Official Videos</h2>
          <div className={styles.movie_details_videos__content}>
            {videos.map(({ id, key, name }) => (
              <VideoItem key={id} videoKey={key} name={name} />
            ))}
          </div>
        </div>
      )}

      {similarMovies.length > 0 && (
        <div className={styles.movie_details_similarMovie__section}>
          <h2 className={styles.movie_details_similarMovie__title}>Similar Movies (API opinion)</h2>
          <div className={styles.movie_details_similarMovie}>
            {similarMovies.map(
              ({ id, poster_path, title, vote_average, release_date, genre_ids }) => (
                <MovieCard
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
      )}
    </div>
  );
};
