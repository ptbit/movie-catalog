import { useState, KeyboardEvent } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.svg";

export const Header = () => {
  const [burgerMenuHide, setBurgerMenuHide] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerMenuHide(!burgerMenuHide);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuHide(false);
  };

  const searchInputHandler = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      // console.log("go search =>", (e.target as HTMLInputElement).value);
    }
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
          <NavLink className="menu-item" to="/tv" onClick={closeBurgerMenu}>
            TV-Shows
          </NavLink>
          <input
            className="header-search"
            type="text"
            placeholder="Search ..."
            onKeyDown={searchInputHandler}
          />
          <div className="menu-item">
            <AiOutlineSearch />
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
