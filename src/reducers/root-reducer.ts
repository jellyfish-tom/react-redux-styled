import { combineReducers } from 'redux';
import { AxiosError } from 'axios';

import { Post, NullablePost } from './models';
import postReducer from './post-reducer';

export default combineReducers({
  posts: postReducer,
});

export interface StoreState {
  posts: {
    data: Post[];
    error: AxiosError;
    loading: boolean;
    activePost: NullablePost;
  }; // TODO: not yet sure about data and error shapes
}
