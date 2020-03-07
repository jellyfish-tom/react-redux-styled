import { Post, NullablePost } from '../reducers/models';
import { AxiosError } from 'axios';

export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

export type FetchPostsPendingType = () => { type: string };
export type FetchPostsSuccessType = (posts: Post[]) => { type: string; payload: Post[] };
export type FetchPostsErrorType = (error: AxiosError) => { type: string; payload: AxiosError };
export type SetActivePostType = (post: NullablePost) => { type: string; payload: Post };

export const fetchPostsPending: FetchPostsPendingType = () => ({
  type: FETCH_POSTS_PENDING,
});

export const fetchPostsSuccess: FetchPostsSuccessType = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError: FetchPostsErrorType = (error: AxiosError) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});

export const setActivePost = (post: NullablePost) => ({
  type: SET_ACTIVE_POST,
  payload: post,
});
