import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";

export const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <NavLink className="logo-container" to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className="menu-container">
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
      </div>
    </header>
  );
};
