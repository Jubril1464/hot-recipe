import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
