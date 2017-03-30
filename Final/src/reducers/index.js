import { combineReducers } from 'redux';
import recipe from './recipe';
import favoriteRecipeList from './favoriteRecipe';
import getDinerList from './getDiner';

const rootReducer = combineReducers({
  recipe,
  favoriteRecipeList,
  getDinerList
});

export default rootReducer;
