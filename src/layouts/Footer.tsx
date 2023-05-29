import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <ul className="footer_links">
          <li className="footer_link">Terms Of Use</li>
          <li className="footer_link">Privacy-Policy</li>
          <li className="footer_link">About</li>
          <li className="footer_link">FAQ</li>
          <li className="footer_link">Blog</li>
        </ul>
        <div className="footer_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora praesentium maiores
          in molestias facilis expedita provident, numquam eveniet quo impedit unde quae officia,
          officiis consectetur illo reiciendis iusto quas.
        </div>
        <div className="footer_socials">
          <span className="footer_socials__social">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="footer_socials__social">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="footer_socials__social">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className="footer_socials__social">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </div>
      </div>
    </footer>
  );
};
