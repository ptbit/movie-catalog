import { useState, KeyboardEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
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
      console.log("need clear");
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
          <input
            className="header-search"
            type="text"
            placeholder="Search ..."
            onKeyDown={startSearchHandler}
            onChange={searchInputChangeHandler}
            value={searchInputValue}
          />
          <div className="menu-item">
            <AiOutlineSearch
              onClick={() => {
                navigate("/search/" + searchInputValue);
              }}
            />
          </div>
        </div>

        <div className="menu-container mobile">
          <NavLink className="menu-item" to="/">
            <AiOutlineSearch />
          </NavLink>
          <NavLink className="menu-item" to="/">
            <AiOutlineMenu onClick={handleBurgerMenu} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
