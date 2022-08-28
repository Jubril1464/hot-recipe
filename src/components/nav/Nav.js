import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
import Search from "../search/Search";
const Nav = () => {
  return (
    <div className="nav">
      <header className="header">
        <div className="header__logo">
          <p className="header__logo--text">
            HOT<span className="header__logo--text1">RECIPE</span>
          </p>
        </div>
        <nav className="nav">
          <ul className="nav__items">
            <li className="nav__item">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="nav__item">
              <Link to="/likedrecipes">Your Liked Recipe</Link>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <Search />
        </div>
      </header>
    </div>
  );
};

export default Nav;
