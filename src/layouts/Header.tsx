import { useState, KeyboardEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.svg";
import { useAppDispatch } from "../hooks";
import { clearMoviesList } from "../store/moviesSlice";

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
    if (e.key === "Enter" && searchInputValue !== "") {
      appDispatch(clearMoviesList());
      navigate("/search/" + searchInputValue);
    }
  };

  const searchInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };

  return (
    <header className={burgerMenuHide ? "header-mobile" : ""}>
      <div className="content-wrapper">
        <NavLink className="logo-container" to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <div className={burgerMenuHide ? "menu-container desktop" : "menu-container desktop hide"}>
          <NavLink className="menu-item" to="/movies" onClick={closeBurgerMenu}>
            Movies
          </NavLink>
          <NavLink
            className="menu-item disable"
            to="/tv"
            onClick={
              // closeBurgerMenu
              (e) => e.preventDefault()
            }>
            TV-Shows
          </NavLink>
          <div className="menu-item search-container">
            <input
              className="header-search"
              type="text"
              placeholder="Search ..."
              onKeyDown={startSearchHandler}
              onChange={searchInputChangeHandler}
              value={searchInputValue}
            />
            <div className="menu-search-btn">
              <AiOutlineSearch
                onClick={() => {
                  if (searchInputValue !== "") {
                    appDispatch(clearMoviesList());
                    navigate("/search/" + searchInputValue);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="menu-container mobile">
          {/* <NavLink className="menu-item" to="/">
            <AiOutlineSearch />
          </NavLink> */}
          <div className="burger-menu-btn">
            <AiOutlineMenu onClick={handleBurgerMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};
