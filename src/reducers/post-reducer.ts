import { Action } from './models';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  SET_ACTIVE_POST,
} from '../actions/post-action';

export default (
  state = { data: [], loading: false, error: '', activePost: null },
  action: Action,
) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_ACTIVE_POST:
      return {
        ...state,
        activePost: action.payload,
      };
    default:
      return state;
  }
};
