import LikeRecipesTypes from "./likeRecipesType";
const INITIAL_STATE = {
 likeRecipes: [],
};
const likeReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LikeRecipesTypes.ADD_TO_LIKES:
        return {
          ...state,
          likeRecipes: [...state.likeRecipes, action.payload]
        };
      case LikeRecipesTypes.REMOVE_lIKES: 
        return {
          ...state,
          likeRecipes : state.likeRecipes.filter(recipe => recipe.id !== action.payload.id)
        }
      default:
        return state;
    }
    
}
export default likeReducers