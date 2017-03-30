import { FETCH_DINER } from '../actions/index';

function getDinerList(state = [], action) {
  switch (action.type) {
    case FETCH_DINER:
      return [action.data, ...state];
  }
  return state;
}


export default getDinerList;
