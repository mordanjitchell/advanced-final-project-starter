import { combineReducers } from 'redux';
import { FETCH_RECIPE, RECIPE_ERROR } from '../actions/index';

function recipeNew(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPE:
    return [action.data];
  }
  return state;
}

function recipeError(state = '', action) {
  if (action.type === RECIPE_ERROR) {
    return action.message;
  }
  return state;
}

const recipe = combineReducers({
recipeNew,
recipeError
});

export default recipe;
