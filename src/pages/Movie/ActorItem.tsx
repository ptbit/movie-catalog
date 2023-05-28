import noAvatar from "../../assets/no-avatar.png";
import styles from "./styles.module.css";
type ActorItemPropsType = {
  avatar: string;
  name: string;
  role: string;
};

export const ActorItem = ({ name, avatar, role }: ActorItemPropsType) => {
  if (avatar === "https://image.tmdb.org/t/p/w138_and_h175_facenull") {
    avatar = noAvatar;
  }

  return (
    <div className={styles.actor_item}>
      <div className={styles.actor_avatar}>
        <img src={avatar} alt={name} />
      </div>
      <div className={styles.actor_name}>{name}</div>
      <div className={styles.actor_role}>{role}</div>
    </div>
  );
};
