import { ADD_FAVORITE, GET_FAVORITE, DELETE_FAVORITE } from '../actions/index';

function favoriteRecipeList(state = [], action) {
  switch (action.type) {
    case GET_FAVORITE:
      return [
        ...state, action.data[0],
      ];
    case ADD_FAVORITE:
      return [
        ...state, action.data,
      ];
    case DELETE_FAVORITE:
      return state.filter(item => item._id !== action.data._id);
    default:
      return state;
  }
}
export default favoriteRecipeList;
