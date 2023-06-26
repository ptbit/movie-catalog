import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <ul className={styles.footer_links}>
          <li className={styles.footer_link}>Terms Of Use</li>
          <li className={styles.footer_link}>Privacy-Policy</li>
          <li className={styles.footer_link}>About</li>
          <li className={styles.footer_link}>FAQ</li>
          <li className={styles.footer_link}>Blog</li>
        </ul>
        <div className={styles.footer_content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora praesentium maiores
          in molestias facilis expedita provident, numquam eveniet quo impedit unde quae officia,
          officiis consectetur illo reiciendis iusto quas.
        </div>
        <div className={styles.footer_socials}>
          <span className={styles.footer_socials__social}>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className={styles.footer_socials__social}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className={styles.footer_socials__social}>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className={styles.footer_socials__social}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </div>
      </div>
    </footer>
  );
};
