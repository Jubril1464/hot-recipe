import { useState, useEffect } from "react";
import "./Recipes.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addLike } from "../../redux/likeRecipes/likeRecipes.action";
import { Link, useNavigate } from "react-router-dom";
import { APIKEY } from "../../APIKEY";

const Recipes = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.likeRecipe);
  const dispatch = useDispatch();
  console.log(selector);
  const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState([]);

  const getRandomRecipes = async () => {
    const getData = localStorage.getItem("popular");
    localStorage.clear("popular");

    if (getData) {
      setRandom(JSON.parse(getData));
      setIsLoading(false);
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=32`
      );
      if (resp.ok) {
        const data = await resp.json();
        setIsLoading(false);

        setRandom(data.recipes);
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        console.log(data.recipes);
      }
    }
  };
  useEffect(() => {
    getRandomRecipes();
  }, []);
  const handleLike = (recipe) => {
    setLikes(likes.concat(recipe.id));
    dispatch(addLike(recipe));
  };
  return (
    <div className="recipes">
      <h1 className="recipes__heading">Recipes</h1>
      {isLoading && (
        <div className="bouncerContainer">
          <div className="bouncer"></div>
        </div>
      )}

      <span className="arrow-left" onClick={() => navigate(-1)}>
        &larr;
      </span>

      <div className="recipes__container">
        {random.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <h3 className="recipe__title">{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt="title" className="recipe__image" />
            </Link>
            <button
              className={`btn ${likes.includes(recipe.id) ? "liked" : ""}`}
              onClick={() => handleLike(recipe)}
            >
              Click to Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
