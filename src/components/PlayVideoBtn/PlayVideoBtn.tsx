import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { openVideoModalActive, setVideoKey } from "../../store/movieSlice";
import { PlayVideoSvg } from "./PlayVideoSvg";
import styles from "./styles.module.css";

type PlayVideoBtnProps = {
  videoKey?: string;
};

export const PlayVideoBtn: FC<PlayVideoBtnProps> = ({ videoKey }) => {
  const appDispatch = useAppDispatch();
  return (
    <span
      className={styles.play_video_btn}
      onClick={() => {
        appDispatch(openVideoModalActive());
        videoKey !== undefined && appDispatch(setVideoKey(videoKey));
      }}>
      <PlayVideoSvg />
      <span className={styles.text}>Watch Trailer</span>
    </span>
  );
};
