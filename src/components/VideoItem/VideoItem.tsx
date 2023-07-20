import { FC } from "react";
import { PlayBtn } from "../PlayBtn/PlayBtn";
import styles from "./styles.module.css";

type videoItemType = {
  name: string;
  videoKey: string;
};

export const VideoItem: FC<videoItemType> = ({ name, videoKey }) => {
  return (
    <div className={styles.video_item}>
      <PlayBtn videoKey={videoKey} name={name} />
    </div>
  );
};
