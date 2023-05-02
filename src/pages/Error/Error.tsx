import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'

export const Error = () => {
  return (
    <div className={styles.page_container}>
      <h1>Error Page</h1>
      <h2>Page not found</h2>
        <NavLink className="logo-container" to="/">
          <button>home page</button>
        </NavLink>
    </div>
  );
};
