import { useState, useEffect } from "react";
import './Recipes.scss'
import ClipLoader from 'react-spinners/ClipLoader'


const Recipes = () => {
    const [random, setRandom] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

  const getRandomRecipes = async () => {
    const getData = localStorage.getItem("popular");
    localStorage.clear("popular");

    if (getData) {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=eab71f0e42cb4b79b29a0ac214d577c3&number=32`
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
  return (
    <div className="recipes">
      {isLoading ? (
        <ClipLoader color={"#000"} size={150} />
      ) : (
        <h1 className="recipes__heading">Recipes</h1>
      )}

      <div className="recipes__container">
        {random.map(({ title, id, image }) => (
          <div className="recipe" key={id}>
            <h3 className="recipe__title">{title}</h3>
            <img src={image} alt="title" className="recipe__image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
