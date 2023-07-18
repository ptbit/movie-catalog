import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { openVideoModalActive, setVideoKey } from "../../store/movieSlice";
import { PlaySvg } from "./PlaySvg";
import styles from "./styles.module.css";

type PlayVideoBtnProps = {
  videoKey?: string;
  name?: string;
};

export const PlayBtnSmall: FC<PlayVideoBtnProps> = ({
  videoKey,
  name,
}) => {
  const appDispatch = useAppDispatch();
  return (
    <div
      className={styles.play_zone__container}
      onClick={() => {
        appDispatch(openVideoModalActive())
        videoKey !== undefined && appDispatch(setVideoKey(videoKey))
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
