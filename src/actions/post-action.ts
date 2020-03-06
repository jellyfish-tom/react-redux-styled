import { Dispatch } from 'redux';
import { Post } from '../reducers/models';

export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

export const fetchPostsPending = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_POSTS_PENDING,
  });
};

export const fetchPostsSuccess = (posts: Post[]) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  });
};

export const fetchPostsError = (error: any) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: FETCH_POSTS_ERROR,
    payload: error,
  });
};

export const setActivePost = (post: Post | null) => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: SET_ACTIVE_POST,
    payload: post,
  });
};
