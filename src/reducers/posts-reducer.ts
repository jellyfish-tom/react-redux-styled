import { AxiosError } from 'axios';
import { Action, Post } from './models';
import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/posts-actions';

export type PostsState = {
  data: Post[];
  loading: boolean;
  error: AxiosError | null;
  activePost: Post;
};

export default (
  state: PostsState = {
    data: [],
    loading: false,
    error: null,
    activePost: {} as Post,
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
    default:
      return state;
  }
};
