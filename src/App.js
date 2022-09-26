import "./App.scss";
import { Routes, Route,useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Searched from "./pages/searched/Searched";
import Recipes from "./components/Recipes/Recipes";
import LikedRecipes from "./components/LikedRecipes/LikedRecipes";
import Recipe from "./pages/Recipe/Recipe";
import Footer from "./components/Footer/Footer";


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
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
