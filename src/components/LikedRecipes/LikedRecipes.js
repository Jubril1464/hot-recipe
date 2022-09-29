import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import './LikedRecipes.scss'
import { Link, useNavigate } from 'react-router-dom';
import { removeLike } from '../../redux/likeRecipes/likeRecipes.action';

const LikedRecipes = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const likedRecipes = useSelector(state => state.likeRecipe.likeRecipes)
  console.log(likedRecipes);
  return (
    <div className="likeRecipes">
      <span className="arrow-left" onClick={() => navigate(-1)}>
        &larr;
      </span>

      {likedRecipes.length === 0 && <h1>You don't have any liked recipe</h1>}
      <div className="likeRecipes__container">
        {likedRecipes.map((recipe) => (
          <div className="like__recipe" key={recipe.id}>
            <div className="img__container">
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt=""
                  className="like__recipe--image"
                />
              </Link>
            </div>
            <h2 className="like__recipe--title">{recipe.title}</h2>
            <button
              className="remove--btn"
              onClick={() => dispatch(removeLike(recipe))}
            >
              Remove From Likes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedRecipes