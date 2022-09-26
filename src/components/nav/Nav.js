import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Search from "../search/Search";
const Nav = () => {
  const [active, setActive] = useState("home");
  const [checked, setChecked] = useState(false);

  document.querySelector(".nav")?.classList.remove("respond__nav");

  if (checked) {
    document.querySelector(".nav").classList.add("respond__nav");
  }
  const handleClick = function (item) {
    setActive(item)
    setChecked(false)
  }
  
    const header = document.querySelector(".header");
    header?.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains('nav__link')) {
          const link = e.target
          const siblings = link?.closest('.nav')?.querySelectorAll('nav__item')
          console.log(siblings);
          
       }
    });

 
  return (
    <div className="navContainer">
      <header className="header">
        <div className="nav__icon">
          <input
            type="checkbox"
            className={`navigation__checkbox`}
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="navi-toggle" className={`navigation__button`}>
            <span className={`navigation__icon`}>&nbsp;</span>
          </label>
        </div>
        <div className="header__logo">
          <p className="header__logo--text">
            HOT<span className="header__logo--text1">RECIPE</span>
          </p>
        </div>
        <nav className="nav">
          <ul className="nav__items">
            <li className="nav__item">
              <Link
                to="/"
                className={`nav__link ${active === "home" && "active"}`}
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/recipes"
                className={`nav__link ${active === "Recipes" && "active"}`}
                onClick={() => handleClick("Recipes")}
              >
                Recipes
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/likedrecipes"
                className={`nav__link ${active === "Like" && "active"}`}
                onClick={() => handleClick("Like")}
              >
                Your Liked Recipe
              </Link>
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
