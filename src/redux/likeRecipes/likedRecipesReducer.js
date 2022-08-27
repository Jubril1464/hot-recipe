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
      default:
        return state;
    }
    
}
export default likeReducers