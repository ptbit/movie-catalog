import { FC } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

type ModalProps = {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  videoKey: string;
  setModalVideoKey: React.Dispatch<React.SetStateAction<string>>;
};
export const Modal: FC<ModalProps> = ({
  modalActive,
  setModalActive,
  videoKey,
  setModalVideoKey,
}) => {
  return (
    <div
      className={modalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => {
        setModalActive(false);
        setModalVideoKey("");
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
