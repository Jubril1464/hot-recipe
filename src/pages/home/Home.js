import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import img from '../../img.jpg'


const Home = () => {
  return (
    <div className="home">
      <div className="home__heroSection">
        <div className="home__heroSection-textbox">
          <h1 className="home__heroSection-textbox--primary">
            Let's start cooking with popular recipes
          </h1>
          <p className="home__heroSection-textbox--secondary">
            Want to learn cook but confused how to start?
          </p>
          <p className="home__heroSection-textbox--secondary">
            No need to worry again!
          </p>
          <Link to="/" className="home__heroSection-textbox--cta">
            Explore Recipes
          </Link>
        </div>
        <div className="imgContainer">
          <img src={img} alt="" className="img" />
          <div className="container1"></div>
          <div className="container2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;