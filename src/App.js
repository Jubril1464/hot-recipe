import "./App.scss";
import { Routes, Route,Link } from "react-router-dom";
import Pages from "./pages/home/Pages";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
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
              <Link to="/">Your Liked Recipe</Link>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <Search />
        </div>
      </header>

      <Pages />
    </div>
  );
}

export default App;
