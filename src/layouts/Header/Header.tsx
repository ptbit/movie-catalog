import Logo from "../../assets/logo.svg";
import { useAppDispatch } from "../../hooks";
import { clearMoviesList, stopMorePages } from "../../store/moviesSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, KeyboardEvent } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import styles from "./styles.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const [burgerMenuHide, setBurgerMenuHide] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  
  const handleBurgerMenu = () => {
    setBurgerMenuHide(!burgerMenuHide);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuHide(false);
  };

  const startSearchHandler = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      goToSearchPage();
    }
  };

  const goToSearchPage = () => {
    if (searchInputValue !== "") {
      handleBurgerMenu();
      appDispatch(stopMorePages())
      appDispatch(clearMoviesList());
      // appDispatch(addSearchRequest(searchInputValue));
      navigate("/search/" + searchInputValue);
    }
  };

  const searchInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
    
  };

  return (
    <header className={burgerMenuHide ? styles.header_mobile : ""}>
      <div className={styles.content_wrapper}>
        <NavLink className={styles.logo_container} to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div
          className={
            burgerMenuHide
              ? `${styles.menu_container} ${styles.desktop}`
              : `${styles.menu_container} ${styles.desktop} ${styles.hide}`
          }>
          <NavLink className={styles.menu_item} to="/movies" onClick={closeBurgerMenu}>
            Movies
          </NavLink>
          <NavLink
            className={`${styles.menu_item} ${styles.disable}`}
            to="/tv"
            onClick={(e) => e.preventDefault()}>
            TV-Shows
          </NavLink>
          <div className={`${styles.menu_item} ${styles.search_container}`}>
            <input
              className={styles.header_search}
              type="text"
              placeholder="Search ..."
              onKeyDown={startSearchHandler}
              onChange={searchInputChangeHandler}
              value={searchInputValue}
            />
            <div className={styles.menu_search_btn}>
              <AiOutlineSearch onClick={() => goToSearchPage()} />
            </div>
          </div>
        </div>

        <div className={`${styles.menu_container} ${styles.mobile}`}>
          <div className={styles.burger_menu_btn}>
            <AiOutlineMenu onClick={handleBurgerMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};
