import { combineReducers } from "redux";
import likeReducers from "./likeRecipes/likedRecipesReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'recipes',
  storage,
  whitelist : ['likeRecipe']
}
const rootReducer = combineReducers({
  likeRecipe : likeReducers
});
export default persistReducer( persistConfig, rootReducer)