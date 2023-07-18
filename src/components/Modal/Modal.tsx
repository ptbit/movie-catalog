import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { closeVideoModalActive, setVideoKey } from "../../store/movieSlice";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

type ModalProps = {
  modalActive: boolean;
  videoKey: string;
  // setModalVideoKey: React.Dispatch<React.SetStateAction<string>>;
};
export const Modal: FC<ModalProps> = ({
  modalActive,
  videoKey,
  // setModalVideoKey,
}) => {
  const appDispatch = useAppDispatch();
  return (
    <div
      className={modalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => {
        appDispatch(closeVideoModalActive())
        appDispatch(setVideoKey(''))
        // setModalVideoKey("");
      }}>
      <div className={styles.modal_content}>
        <div className={styles.modalHeader}>
          <span className={styles.btn}>Close</span>
        </div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          controls
          width="100%"
          height="100%"
          // playing={false}
        />
      </div>
    </div>
  );
};
