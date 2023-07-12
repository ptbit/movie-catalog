import { FC } from "react";
import { PlayBtnSmall } from "../../components/PlayBtnSmall/PlayBtnSmall";
import styles from "./styles.module.css";

type videoItemType = {
  name: string;
  videoKey: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setModalVideoKey: React.Dispatch<React.SetStateAction<string>>;
};

export const VideoItem: FC<videoItemType> = ({
  videoKey,
  name,
  setModalActive,
  setModalVideoKey,
}) => {
  return (
    <div className={styles.movie_details_videos__video_item}>
      <PlayBtnSmall
        setModalActive={setModalActive}
        videoKey={videoKey}
        setModalVideoKey={setModalVideoKey}
        name={name}
      />
      {/* <img
        className={styles.movie_details_videos__video_poster}
        alt=""
        src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}></img> */}
      {/* <div className={styles.movie_details_videos__video_title}>{name}</div> */}
    </div>
  );
};
