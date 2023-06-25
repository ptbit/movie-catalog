import { IMDB } from "../../services/IMDB";
import { getTrending } from "../../store/trendingSlice";
import { getTopRated } from "../../store/topRatedSlice";
import { useNavigate } from "react-router-dom";
import { CarouselSection } from "./CarouselSection";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FC, KeyboardEvent, useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Home: FC = () => {
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
    if (e.key === "Enter") {
      goToSearchPage();
    }
  };

  const goToSearchPage = () => {
    if (searchInputValue !== "") {
      navigate("/search/" + searchInputValue);
    }
  };

  const searchInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };

  return (
    <>
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
              <button onClick={() => goToSearchPage()}>Search</button>
            </div>
          </div>
        </div>
      </div>

      <CarouselSection movies={trending} sectionTitle="Trending" />
      <CarouselSection movies={topRated} sectionTitle="Top Rated" />
    </>
  );
};
