import { useState, useEffect } from "react";
import './Recipes.scss'
import ClipLoader from 'react-spinners/ClipLoader'


const Recipes = () => {
    const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [likes, setLikes] = useState([])

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
  const handleLike = (id) => {
    setLikes(likes.concat(id));
  };
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
            <button className={`btn ${likes.includes(id) ? 'liked': ''}`} onClick={() => handleLike(id)}>Click to Like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
