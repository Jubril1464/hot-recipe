import { React, useState, useEffect } from "react";
import { Link,useLocation} from "react-router-dom";
import "./Nav.scss";
import Search from "../search/Search";



const navContainer = document.querySelector(".navContainer");
console.log(navContainer);
const Nav = () => {
  const [active, setActive] = useState("Home");
  const [checked, setChecked] = useState(false);
  const [sticky, setSticky] = useState(false)
  const params = useLocation()
  

  

  document.querySelector(".nav")?.classList.remove("respond__nav");

  if (checked) {
    document.querySelector(".nav").classList.add("respond__nav");
  }
  const handleClick = function (item) {
    setActive(item)
    setChecked(false)
  }

  
  useEffect(() => {
    if (params.pathname.slice(1) === "recipes") setActive("Recipes");
    else if (params.pathname.slice(1) === '') setActive('Home');
    else if (params.pathname.slice(1) === 'likedrecipes') setActive('Like');
  }, [params])

  useEffect(() => {
     
  const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    
    if(!entry.isIntersecting) setSticky(true)
    else setSticky(false)
   

  };
 let navObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
  });
    navObserver.observe(document.querySelector('.navContainer'));
    return () => {
    navObserver = null
    }
  })
 
  
 
  return (
    <div className="navContainer">
      <header className={`header ${sticky && 'sticky'}`}>
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
                className={`nav__link ${active === "Home" && "active"}`}
                onClick={() => handleClick("Home")}
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
