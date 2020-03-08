import { combineReducers } from 'redux';

import postsReducer, { PostsState } from './posts-reducer';
import postReducer, { PostState } from './post-reducer';

export default combineReducers({
  posts: postsReducer,
  activePost: postReducer,
});

export interface StoreState {
  posts: PostsState;
  activePost: PostState;
}
