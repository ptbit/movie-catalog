import { IMDB } from "../../services/IMDB";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Home = () => {
  const [heroImgUrl, setHeroImgUrl] = useState("");
  useEffect(() => {
    getHeroImg();
  }, []);

  const getHeroImg = async () => {
    const imgUrl = await IMDB.getRandomPoster();
    setHeroImgUrl(imgUrl);
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
              <input type="text" placeholder="Search for a movie or tv show...." />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
