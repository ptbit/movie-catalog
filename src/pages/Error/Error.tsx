import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Error: FC = () => {
  return (
    // <main>
    <main className={styles.page_container}>
      <h1>Error Page</h1>
      <h2>Page not found</h2>
      <NavLink to="/">
        <button>Back to home page</button>
      </NavLink>
    </main>
  );
};

export default Error;
