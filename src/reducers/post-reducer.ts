import { AxiosError } from 'axios';
import { Action, Post } from './models';
import { SET_ACTIVE_POST, UPDATE_POST, POST_ACTION_PENDING } from '../actions/post-actions';

export type PostState = {
  data: Post;
  loading: boolean;
  error: AxiosError | null;
};

export default (
  state: PostState = {
    data: {} as Post,
    loading: false,
    error: null,
  },
  action: Action,
) => {
  switch (action.type) {
    case SET_ACTIVE_POST:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case POST_ACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
