import { combineReducers } from 'redux';
import { Post } from './models';
import postReducer from './post-reducer';

export default combineReducers({
  posts: postReducer,
});

export interface StoreState {
  posts: { data: Post[]; error: any; loading: boolean, activePost: Post | null }; // TODO: not yet sure about data and error shapes
}
