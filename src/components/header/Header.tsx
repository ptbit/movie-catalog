import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import "./style.css";

export const Header = () => {
  const [burgerMenuHide, setBurgerMenuHide] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerMenuHide(!burgerMenuHide);
  };
  
  return (
    <header className={burgerMenuHide ? "header-mobile" : ""}>
      <div className="content-wrapper">
        <NavLink className="logo-container" to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <div className={burgerMenuHide ? "menu-container desktop" : "menu-container desktop hide"}>
          <NavLink className="menu-item" to="/movies">
            Movies
          </NavLink>
          <NavLink className="menu-item" to="/tv">
            TV-Shows
          </NavLink>
          <NavLink className="menu-item" to="/">
            <AiOutlineSearch size={"20px"} />
          </NavLink>
        </div>

        <div className="menu-container mobile">
          <NavLink className="menu-item" to="/">
            <AiOutlineSearch size={"20px"} />
          </NavLink>
          <NavLink className="menu-item" to="/">
            <AiOutlineMenu onClick={handleBurgerMenu} size={"20px"} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
