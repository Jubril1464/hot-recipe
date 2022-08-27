import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "../searched/Searched";
import Recipes from "../../components/Recipes/Recipes";

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/searched/:search" element={<Searched />} />
        <Route path='/recipes' element={<Recipes/>} />
      </Routes>
    </div>
  );
};

export default Pages;
