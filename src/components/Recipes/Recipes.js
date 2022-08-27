import { useState, useEffect } from "react";
import './Recipes.scss'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addLike } from "../../redux/likeRecipes/likeRecipes.action";


const Recipes = () => {
  const selector = useSelector(state => state.likeRecipe)
  const dispatch = useDispatch()
  console.log(selector);
    const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [likes, setLikes] = useState([])
  const [state,setState] = useState([])

  const getRandomRecipes = async () => {
    const getData = localStorage.getItem("popular");
    

    if (getData) {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=b69113792df04b00908972c6955043e3&number=32`
        );
        if (resp.ok) {
            const data = await resp.json();
            setIsLoading(false)

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
    dispatch(addLike(recipe))
    

  };
  return (
    <div className="recipes">
      {isLoading ? (
        <ClipLoader color={"#000"} size={150} />
      ) : (
        <h1 className="recipes__heading">Recipes</h1>
      )}

      <div className="recipes__container">
        {random.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <h3 className="recipe__title">{recipe.title}</h3>
            <img src={recipe.image} alt="title" className="recipe__image" />
            <button className={`btn ${likes.includes(recipe.id) ? 'liked': ''}`} onClick={() => handleLike(recipe)}>Click to Like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
