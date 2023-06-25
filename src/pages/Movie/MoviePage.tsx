import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovie, getSimilar, getTeam } from "../../store/movieSlice";
import { clearMoviesList } from "../../store/moviesSlice";
import { ActorItem } from "./ActorItem";
import styles from "./styles.module.css";

export const MoviePage = () => {
  const appDispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);
  const team = useAppSelector((state) => state.movie.team);
  const similarMovies = useAppSelector((state) => state.movie.similarMovies);

  let movieDetailsPageStyle = {};
  similarMovies.length > 0
    ? (movieDetailsPageStyle = { paddingBottom: "0" })
    : (movieDetailsPageStyle = { paddingBottom: "150px" });
  const params = useParams();

  const movieId = params.id === undefined ? 0 : +params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    appDispatch(clearMoviesList());
    appDispatch(getMovie(movieId));
    appDispatch(getTeam(movieId));
    appDispatch(getSimilar(movieId));
  }, [params]);

  return (
    <div className={styles.movie_details_page} style={movieDetailsPageStyle}>
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
        <MovieDetails movie={movie} />
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

      {similarMovies.length > 0 ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};
