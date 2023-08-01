import { FC } from "react";
import noAvatar from "../../assets/no-avatar.png";
import { LazyLoadPic } from "../LazyLoadPic/LazyLoadPic";
import styles from "./styles.module.css";

type ActorItemPropsType = {
  avatar: string;
  name: string;
  role: string;
};

export const ActorItem: FC<ActorItemPropsType> = ({ name, avatar, role }) => {
  if (avatar === "https://image.tmdb.org/t/p/w138_and_h175_facenull") {
    avatar = noAvatar;
  }

  return (
    <div className={styles.actor_item}>
      <div className={styles.actor_avatar}>
        <LazyLoadPic src={avatar} alt={name} className={"actor_avatar__img" } />
      </div>
      <div className={styles.actor_name}>{name}</div>
      <div className={styles.actor_role}>{role}</div>
    </div>
  );
};
