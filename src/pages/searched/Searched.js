import { useState, useEffect, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Searched.scss";

const Searched = () => {
  const [searchedRecipe, setSearchRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const param = useParams();
  let REACT_APP_RECIPE_API_KEY = "eab71f0e42cb4b79b29a0ac214d577c3";

  const getSearchedRecipes = async (search) => {
    setLoading(true);
    
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=eab71f0e42cb4b79b29a0ac214d577c3&query=${search}`
      );
      if (!res.ok) {
        throw new Error('Sorry something went wrong!')
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      setError(err.message)
    }
  };
  useEffect(() => {
    console.log("run");
    let isMounted = true;
    getSearchedRecipes(param.search).then((data) => {
      if (isMounted) setSearchRecipe(data);
    });
    setLoading(false)

    return () => {
      isMounted = false;
    };
  }, [param.search]);

  return (
    <div className={`searchedRecipe`}>
      {loading && <h1>Loading...</h1>}
      {/* {error && <p>{error}</p>} */}

      <div className="recipeCardContainer">
        {searchedRecipe ? (
          searchedRecipe.map(({ title, id, image }) => (
            <div className="recipeCard" key={id}>
              <h4 className="recipeCard--title">{title}</h4>
              <img src={image} alt={title} />
            </div>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default Searched;
