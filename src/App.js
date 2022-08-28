import "./App.scss";
import { Routes, Route,Link,useLocation } from "react-router-dom";
import Pages from "./pages/home/Pages";
import Search from "./components/search/Search";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Searched from "./pages/searched/Searched";
import Recipes from "./components/Recipes/Recipes";
import LikedRecipes from "./components/LikedRecipes/LikedRecipes";


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Nav />
      <Routes Location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/likedrecipes" element={<LikedRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
