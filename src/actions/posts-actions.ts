import { AxiosError } from 'axios';

import { Post } from '../reducers/models';
import { ErrorType } from './generics';

export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_ERROR = 'UPDATE_POST_ERROR';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export type FetchPostsPendingType = () => { type: string };
export type FetchPostsSuccessType = (posts: Post[]) => { type: string; payload: Post[] };

export const fetchPostsPending: FetchPostsPendingType = () => ({
  type: FETCH_POSTS_PENDING,
});

export const fetchPostsSuccess: FetchPostsSuccessType = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError: ErrorType = (error: AxiosError) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});
