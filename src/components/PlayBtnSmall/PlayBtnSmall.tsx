import { FC } from "react";
import { PlaySvg } from "./PlaySvg";
import styles from "./styles.module.css";

type PlayVideoBtnProps = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  videoKey?: string;
  setModalVideoKey?: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
};

export const PlayBtnSmall: FC<PlayVideoBtnProps> = ({
  setModalActive,
  videoKey,
  setModalVideoKey,
  name,
}) => {
  return (
    <div
      className={styles.play_zone__container}
      onClick={() => {
        setModalActive(true);
        if (videoKey !== undefined && setModalVideoKey !== undefined) {
          setModalVideoKey(videoKey);
        }
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
