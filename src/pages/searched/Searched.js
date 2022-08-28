import { useState, useEffect, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Searched.scss";

const Searched = () => {
  const [searchedRecipe, setSearchRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();

  const param = useParams();

  const getSearchedRecipes = async (search) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=09154b05e520491eb51574522fd36aff&query=${search}`
      );
      if (!res.ok) {
        throw new Error("Sorry something went wrong!");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    console.log("run");
    let isMounted = true;
    getSearchedRecipes(param.search).then((data) => {
      if (isMounted) setSearchRecipe(data);
    });
    setLoading(false);

    return () => {
      isMounted = false;
    };
  }, [param.search]);
  // const handleClick = (image, id, title) => {
  //   likeRecipes(image, id, title)
  //   setState(true)
  // }
  const handleLike = (id) => {
    setLikes(likes.concat(id));
  };

  return (
    <div className={`searchedRecipe`}>
      <span className="arrow-left" onClick={() => navigate(-1)}>
        &larr;
      </span>

      {loading && <h1>Loading...</h1>}
      {/* {error && <p>{error}</p>} */}

      <div className="recipeCardContainer">
        {searchedRecipe ? (
          searchedRecipe.map(({ title, id, image }) => (
            <div className="recipeCard" key={id}>
              <h4 className="recipeCard--title">{title}</h4>
              <Link to={`/recipe/${id}`}>
                <img src={image} alt={title} />
              </Link>
              <button
                onClick={() => handleLike(id)}
                className={`btn ${likes.includes(id) ? "liked" : ""}`}
              >
                Click to Like
              </button>
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
