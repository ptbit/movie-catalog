import { FC } from "react";
import { PlayVideoSvg } from "./PlayVideoSvg";
import styles from "./styles.module.css";

type PlayVideoBtnProps = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  videoKey?: string;
  setModalVideoKey?: React.Dispatch<React.SetStateAction<string>>;
};

export const PlayVideoBtn: FC<PlayVideoBtnProps> = ({ setModalActive,   videoKey,
  setModalVideoKey, }) => {
  return (
    <div
      className={styles.play_video_btn}
      onClick={() => {
        setModalActive(true);
        if (videoKey !== undefined && setModalVideoKey !== undefined) {
          setModalVideoKey(videoKey);
        }
      }}>
      <PlayVideoSvg />
      <span className={styles.text}>Watch Trailer</span>
    </div>
  );
};
