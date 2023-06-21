import { KeyboardEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IMDB } from "../../services/IMDB";
import { getTrending } from "../../store/trendingSlice";
import { getTopRated } from "../../store/topRatedSlice";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  const [heroImgUrl, setHeroImgUrl] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const trending = useAppSelector((state) => state.trending.trending);
  const topRated = useAppSelector((state) => state.topRated.topRated);

  useEffect(() => {
    window.scrollTo(0, 0);
    getHeroImg();
    appDispatch(getTrending());
    appDispatch(getTopRated());
  }, []);

  const getHeroImg = async () => {
    const imgUrl = await IMDB.getRandomPoster();
    setHeroImgUrl(imgUrl);
  };

  const startSearchHandler = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && searchInputValue !== "") {
      navigate("/search/" + searchInputValue);
    }
  };

  const searchInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };

  return (
    <div className={styles.home_page}>
      <div className={styles.hero_banner}>
        <div className={styles.hero_image}>
          <span className={styles.hero_background}>
            <img
              className={styles.hero_img}
              src={"https://image.tmdb.org/t/p/original/" + heroImgUrl}></img>
          </span>
        </div>

        <div className={styles.hero_shadow}></div>

        <div className={styles.hero_content_wrapper}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Welcome.</h1>
            <p className={styles.hero_description}>
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <div className={styles.search_row}>
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                value={searchInputValue}
                onKeyDown={startSearchHandler}
                onChange={searchInputChangeHandler}
              />
              <button
                onClick={() => {
                  if (searchInputValue !== "") {
                    navigate("/search/" + searchInputValue);
                  }
                }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.carouselSection}>
        <div className={styles.carouselHeader}>
          <span className={styles.carouselTitle}>Trending</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.contentWrapper}>
            <div className={styles.carouselItems}>
              {trending.map((movie) => (
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

      <div className={styles.carouselSection}>
        <div className={styles.carouselHeader}>
          <span className={styles.carouselTitle}>Top Rated</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.contentWrapper}>
            <div className={styles.carouselItems}>
              {topRated.map((movie) => (
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
    </div>
  );
};
