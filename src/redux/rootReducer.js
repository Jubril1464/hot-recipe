import { combineReducers } from "redux";
import likeReducers from "./likeRecipes/likedRecipesReducer";
const rootReducer = combineReducers({
  likeRecipe : likeReducers
});
export default rootReducer