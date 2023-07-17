import { FC } from "react";
import { PlayBtnSmall } from "../PlayBtnSmall/PlayBtnSmall";
import styles from "./styles.module.css";

type videoItemType = {
  name: string;
  videoKey: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setModalVideoKey: React.Dispatch<React.SetStateAction<string>>;
};

export const VideoItem: FC<videoItemType> = ({
  name,
  videoKey,
  setModalActive,
  setModalVideoKey,
}) => {
  return (
    <div className={styles.video_item}>
      <PlayBtnSmall
        setModalActive={setModalActive}
        videoKey={videoKey}
        setModalVideoKey={setModalVideoKey}
        name={name}
      />
    </div>
  );
};
