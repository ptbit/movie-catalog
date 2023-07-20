import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { openVideoModalActive, setVideoKey } from "../../store/movieSlice";
import { PlaySvg } from "./PlaySvg";
import styles from "./styles.module.css";

type PlayBtnProps = {
  videoKey?: string;
  name?: string;
  watchTrailerPlayVideoBtn?: boolean;
};

export const PlayBtn: FC<PlayBtnProps> = ({ videoKey, name, watchTrailerPlayVideoBtn = false }) => {
  const appDispatch = useAppDispatch();
  return watchTrailerPlayVideoBtn ? (
    <span
      className={styles.play_video_btn}
      onClick={() => {
        appDispatch(openVideoModalActive());
        videoKey !== undefined && appDispatch(setVideoKey(videoKey));
      }}>
      <PlaySvg />
      <span className={styles.text}>Watch Trailer</span>
    </span>
  ) : (
    <div
      className={styles.play_zone__container}
      onClick={() => {
        appDispatch(openVideoModalActive());
        videoKey !== undefined && appDispatch(setVideoKey(videoKey));
      }}>
      <div className={styles.play_zone__header}>
        <img
          className={styles.play_zone__poster}
          alt=""
          src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}></img>
        <PlaySvg />
      </div>
      <div className={styles.play_zone__title}>{name}</div>
    </div>
  );
};
