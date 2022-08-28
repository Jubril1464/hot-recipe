import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
import Search from "../search/Search";
const Nav = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [active, setActive] = useState('home')

  const handleClick =()=> setClick(!click)
  const closeMobileMenu = () => setClick(false)
  
  const showButton = () => {
    if (window.innerWidth <= 900) {
      setButton(true)
    } else setButton(false)
  }
  window.addEventListener('resize', showButton)
 
  return (
    <div className="nav">
      <header className="header">
        <div className="nav__icon">
          {button && <i className="fa fa-bars" onClick={handleClick}></i>}
          {/* <span className={`${showButton ? "" : "icon"}`}></span> */}
        </div>
        <div className="header__logo">
          <p className="header__logo--text">
            HOT<span className="header__logo--text1">RECIPE</span>
          </p>
        </div>
        <nav className={`nav ${click ? "" : "none"}`}>
          {button && (
            <span className="nav__times" onClick={handleClick}>
              &times;
            </span>
          )}
          <ul className="nav__items">
            <li className="nav__item" onClick={closeMobileMenu}>
              {" "}
              <Link
                to="/"
                className={`${active === "home" && "active"}`}
                onClick={() => setActive("home")}
              >
                Home
              </Link>
            </li>
            <li className="nav__item" onClick={closeMobileMenu}>
              <Link
                to="/recipes"
                className={`${active === "Recipes" && "active"}`}
                onClick={() => setActive("Recipes")}
              >
                Recipes
              </Link>
            </li>
            <li className="nav__item" onClick={closeMobileMenu}>
              <Link
                to="/likedrecipes"
                className={`${active === "Like" && "active"}`}
                onClick={() => setActive("Like")}
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
