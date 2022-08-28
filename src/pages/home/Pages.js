import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "../searched/Searched";
import Recipes from "../../components/Recipes/Recipes";
import LikedRecipes from "../../components/LikedRecipes/LikedRecipes";
import Nav from "../../components/nav/Nav";

const Pages = () => {
  const location = useLocation();
  return (
    <div className="pages">
     
    </div>
  );
};

export default Pages;
