import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './LikedRecipes.scss'
import { Link,useNavigate } from 'react-router-dom';

const LikedRecipes = () => {
  const navigate = useNavigate()
  const likedRecipes = useSelector(state => state.likeRecipe.likeRecipes)
  console.log(likedRecipes);
  return (
    <div className="likeRecipes">
     <span className="arrow-left" onClick={()=> navigate(-1)}>&larr;</span>
      {likedRecipes.length === 0 && <h1>You dont have any liked recipe</h1>}
      <div className="likeRecipes__container">
        {likedRecipes.map((recipe) => (
          <div className="like__recipe" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt="" className="like__recipe--image" />
            </Link>
            <h2 className="like__recipe--title">{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedRecipes