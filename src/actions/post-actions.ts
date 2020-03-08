import { AxiosError } from 'axios';

import { Post } from '../reducers/models';
import { ErrorType } from './generics';

export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const POST_ACTION_PENDING = 'POST_ACTION_PENDING';
export const ON_POST_ACTION_ERROR = 'ON_POST_ACTION_ERROR';

export type SetActivePostType = (post: Post) => { type: string; payload: Post };
export type UpdatePostType = (post: Post) => { type: string; payload: Post };
export type CreatePostType = (post: Post) => { type: string; payload: Post };
export type OnPostActionPendingType = () => { type: string };

export const setActivePost = (post: Post) => ({
  type: SET_ACTIVE_POST,
  payload: post,
});

export const updatePost = (post: Post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const onPostActionPending = () => ({
  type: POST_ACTION_PENDING,
});

export const onPostActionError: ErrorType = (error: AxiosError) => ({
  type: ON_POST_ACTION_ERROR,
  payload: error,
});
