import { connect, useSelector } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FireworkSpinner } from 'react-spinners-kit';

import { ErrorType } from '../actions/generics';
import { StoreState } from '../reducers/root-reducer';
import { PostState } from '../reducers/post-reducer';
import { Post } from '../reducers/models';
import {
  onPostActionError,
  onPostActionPending,
  OnPostActionPendingType,
  setActivePost,
  updatePost,
  UpdatePostType,
} from '../actions/post-actions';
import * as postsAPI from '../api/posts';
import Routes from '../api/routes';

function PostDetailsPage(props: {
  updatePost: UpdatePostType;
  onPostActionError: ErrorType;
  onPostActionPending: OnPostActionPendingType;
}) {
  const { data, loading } = useSelector((state: StoreState) => state.activePost as PostState);
  const history = useHistory();

  const { updatePost, onPostActionPending, onPostActionError } = props;

  const onTitleChange = (event: any) => {
    updatePost({ ...data, title: event.target.value });
  };

  const onBodyChange = (event: any) => {
    updatePost({ ...data, body: event.target.value });
  };

  const saveChanges = () => {
    if (data.id) {
      postsAPI.updatePost({ itemId: data.id, payload: data });
      history.push(Routes.posts);
    } else {
      postsAPI.createPost({
        payload: data,
        begin: onPostActionPending,
        success: () => {
          setActivePost({} as Post);
          history.push(Routes.posts);
        },
        error: onPostActionError,
      });
    }
  };

  return (
    <div className="page post-details">
      {loading ? (
        <FireworkSpinner size={30} color="#686769" loading={loading} />
      ) : (
        <>
          <input onChange={onTitleChange} value={data.title || ''} />
          <input onChange={onBodyChange} value={data.body || ''} />
          <button onClick={saveChanges}>{data.id ? 'UPDATE' : 'CREATE'}</button>
        </>
      )}
    </div>
  );
}

export default connect(null, { updatePost, onPostActionPending, onPostActionError })(PostDetailsPage);
