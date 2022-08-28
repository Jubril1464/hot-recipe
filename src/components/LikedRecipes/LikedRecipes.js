import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './LikedRecipes.scss'

const LikedRecipes = () => {
  const likedRecipes = useSelector(state => state.likeRecipe.likeRecipes)
  console.log(likedRecipes);
  return (
    <div className="likeRecipes">
      <div className="likeRecipes__container">
        {likedRecipes.map((recipe) => (
          <div className="like__recipe">
            <img src={recipe.image} alt="" className='like__recipe--image' />
            <h2 className='like__recipe--title'>{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedRecipes