import { AxiosError } from 'axios';
import { Action, Post, NullablePost } from './models';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  SET_ACTIVE_POST,
  UPDATE_POST,
} from '../actions/post-action';

type PostsState = {
  data: Post[];
  loading: boolean;
  error: AxiosError | null;
  activePost: NullablePost;
};

export default (
  state: PostsState = {
    data: [],
    loading: false,
    error: null,
    activePost: null,
  },
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
    case UPDATE_POST:
      const indexOfElementToUpdate = state.data.findIndex(element => element.id === action.payload.id);

      return {
        ...state,
        activePost: action.payload,
        data: [
          ...state.data.slice(0, indexOfElementToUpdate),
          action.payload,
          ...state.data.slice(indexOfElementToUpdate + 1),
        ],
      };
    default:
      return state;
  }
};
