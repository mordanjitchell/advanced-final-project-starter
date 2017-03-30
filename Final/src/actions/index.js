import axios from 'axios';

export const SELECT_FOOD = 'SELECT_FOOD';
export function selectRecipe(recipe) {
  return {
    type: SELECT_FOOD,
    payload: recipe,
  };
}


export const FETCH_RECIPE = 'FETCH_RECIPE';
export function fetchRecipe(food) {
  const request = axios.get(`https://api.edamam.com/search?q=${food}&app_id=71815df4&app_key=1613c7334844660e560bac70e3a35e47&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_RECIPE,
        data,
      });
    });
  };
}

export const RECIPE_ERROR = 'RECIPE_ERROR';
export function recipeError(message) {
  return {
    type: RECIPE_ERROR,
    message,
  };
}

export const ADD_FAVORITE = 'ADD_FAVORITE';
export function addFavorite(recipe) {
  const request = axios.post('http://localhost:3001/recipes', recipe);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: ADD_FAVORITE,
        data,
      });
    });
  };
}

export const GET_FAVORITE = 'GET_FAVORITE';
export function getFavorite() {
  const request = axios.get('http://localhost:3001/recipes');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: GET_FAVORITE,
        data,
      });
    });
  };
}

export const FETCH_DINER = 'FETCH_DINER';
export function fetchDiner(food) {
  const request = axios.get(`https://api.edamam.com/search?q=${food}&app_id=71815df4&app_key=1613c7334844660e560bac70e3a35e47&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_DINER,
        data,
      });
    });
  };
}

export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export function deleteFavorite(item, id) {
  const request = axios.delete(`http://localhost:3001/recipes${id}`);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: DELETE_FAVORITE,
        data,
      });
    });
  };
}
