import { FC } from "react";
import { PlayBtnSmall } from "../PlayBtnSmall/PlayBtnSmall";
import styles from "./styles.module.css";

type videoItemType = {
  name: string;
  videoKey: string;
};

export const VideoItem: FC<videoItemType> = ({ name, videoKey }) => {
  return (
    <div className={styles.video_item}>
      <PlayBtnSmall videoKey={videoKey} name={name} />
    </div>
  );
};
